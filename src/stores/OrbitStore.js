
import {
    observable,
    decorate,
    computed
} from 'mobx'

import Identities from 'orbit-db-identity-provider';
import PolkaIdentityProvider from 'orbit-db-identity-provider/src/polka-identity-provider';
import IPFS from 'ipfs'
//import Orbit from 'orbit_'
import PolkaAccessController from 'orbit-db-access-controllers/src/polka-access-controller';
const OrbitDB = require('orbit-db')
let AccessControllers = require('orbit-db-access-controllers')

const orbOptions = {
    "ipfs": {
        "preload": {
            "enabled": false
        },
        "config": {
            "Addresses": {
                "Swarm": [
                    "/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star"
                ]
            }
        }
    },
    "channels": [
        "orbit-dev-2020-10"
    ]
}

const ipfsOptions = {
     EXPERIMENTAL: {
      pubsub: true
    },
    relay: {
      enabled: true,
      hop: { enabled: false, active: false }
    },
    config: {
      Addresses: {
        Swarm: ['/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star/'],
        API: '',
        Gateway: ''
      },
      Discovery: {
        MDNS: {
          Enabled: false,
          Interval: 10
        },
        webRTCStar: {
          Enabled: true
        }
      },
      Bootstrap: [
        '/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd',
        '/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3',
        '/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM',
        '/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu',
        '/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm',
        '/dns4/nyc-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64',
        '/dns4/node0.preload.ipfs.io/tcp/443/wss/ipfs/QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic',
        '/dns4/node1.preload.ipfs.io/tcp/443/wss/ipfs/Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6'
      ]
    }
  }

class OrbitStore {

    constructor(rootStore) {
        this.rootStore = rootStore;
    }


    identity = {};
    items = [];
    channels = [];
    feed;


    connect = async () => {

        this.loadingState = false;
        const type = PolkaIdentityProvider.type
        Identities.addIdentityProvider(PolkaIdentityProvider);
        AccessControllers.addAccessController({ AccessController: PolkaAccessController })
        const options = { id: 'local-id', type, mnemonicOpts: {} };
        options.mnemonicOpts.mnemonic = 'swim usage treat horse inhale session radar balance minute rare surge gasp';
        /*       const options = { id: 'local-id', }; */

        const identity = await Identities.createIdentity(options)
        console.log(Identities, identity)
        const verified = await Identities.verifyIdentity(identity);
        console.log(verified, 'verifyIdentity');
        this.identity = { ...identity.toJSON(), ...{ verified } };
        this.ipfs = await IPFS.create(ipfsOptions);
        let orbitOptions = { ...orbOptions }

        orbitOptions.directory = `directory`;
        orbitOptions.id = identity.toJSON().id;
        orbitOptions.identity = identity;
        orbitOptions.provider = Identities;
        orbitOptions.AccessControllers = AccessControllers;

        this.orbit = await OrbitDB.createInstance(this.ipfs, orbitOptions);


        const kv = await this.orbit.kvstore('settings1', {
            accessController: {
                type: PolkaIdentityProvider.type,
                write: [orbitOptions.id]
            }
        })



        kv.events.on('ready', () => {
            console.log('ready')

            console.log(kv.get('volume'))
            // 100
        });
        await kv.load()



        const channelOptions = Object.assign(
            {
                accessController: {
                    write: ['*'],
                    type: 'polka-sr25519' // Allow anyone to write to the channel
                }
            }
        )

        const data = {
            content: ' Hello world v2',
            meta: { from: 'this.userProfile', type: 'text', ts: new Date().getTime() }
        }

        let channelName = 'globalChannel1';
        console.log(channelOptions)
        const feed = await this.orbit.log(channelName, channelOptions)
         feed.load()

        this.feed = feed;


        const CHANNEL_FEED_EVENTS = ['ready', 'write', 'load.progress', 'replicate.progress', 'replicated'];

        CHANNEL_FEED_EVENTS.forEach(eventName => {
            feed.events.on(eventName, this.channelEvent.bind(this, eventName, channelName))
        });

        console.log(`Joined #${channelName}, ${feed.address.toString()}`)

        await feed.load()

        setInterval(async () => {
            await feed.add(data)
          }, 10000)

    }





    channelEvent = async (eventName, channelName, ...args) => {

        console.log('channelEvent', eventName, channelName, ...args)

        if (eventName === 'ready') {
            const items = this.feed.iterator({limit: -1}).collect().map(e => e.payload.value)
            console.log(items, 'ready');
            this.items = items;
        }

        if (typeof eventName !== 'string') return
        if (typeof channelName !== 'string') return

        const channel = this.channels[channelName]

        const meta = {
            channelName: channelName,
            replicationStatus: channel && channel.replicationStatus
        }


        console.log({
            action: 'channel-event',
            name: eventName,
            meta,
            args
        })
    }


    get getItems() {
        return this.items.slice()
    }

}




export default decorate(OrbitStore, {
    identity: observable,
    channels: observable,
    starting: observable,
    stopping: observable,
    isOnline: observable,
    items: observable,
    getItems: computed

})
