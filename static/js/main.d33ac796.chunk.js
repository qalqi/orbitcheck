(this.webpackJsonporbitcheck=this.webpackJsonporbitcheck||[]).push([[0],{1003:function(e,t){},1209:function(e,t){},1280:function(e,t){},1309:function(e,t){},1590:function(e,t){},1608:function(e,t){},1635:function(e,t){},1637:function(e,t){},1657:function(e,t){},1658:function(e,t){},1757:function(e,t,n){"use strict";n.r(t);var o=n(15),r=n.n(o),a=n(185),s=n.n(a),i=(n(701),n(0)),c=n.n(i),p=n(30),l=n(61),u=n(102),d=n(120),f=n(83),b=n(119),m=(n(703),n(188)),y=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=Object(p.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.orbitStore.connect();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.orbitStore,t=e.identity,n=e.getItems;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},Object.keys(t).map((function(e,n){return r.a.createElement("div",{className:"Key-Text",key:e},e,": ",JSON.stringify(t[e]))}))),r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement("div",{className:"Key-Text",key:t},"Message "+t+" :",JSON.stringify(e))}))),r.a.createElement("div",null))}}]),t}(o.Component),h=Object(m.b)("orbitStore")(Object(m.c)(y));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=n(84),w=n(20),v=n(146),S=n.n(v),k=n(266),O=n.n(k),x=n(693),j=n.n(x),E=n(694),N=n.n(E),M=n(1633),Q=n(1730),A={ipfs:{preload:{enabled:!1},config:{Addresses:{Swarm:["/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star"]}}},channels:["orbit-dev-2020-10"]},J={EXPERIMENTAL:{pubsub:!0},relay:{enabled:!0,hop:{enabled:!1,active:!1}},config:{Addresses:{Swarm:["/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star/"],API:"",Gateway:""},Discovery:{MDNS:{Enabled:!1,Interval:10},webRTCStar:{Enabled:!0}},Bootstrap:["/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd","/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3","/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM","/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu","/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm","/dns4/nyc-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64","/dns4/node0.preload.ipfs.io/tcp/443/wss/ipfs/QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic","/dns4/node1.preload.ipfs.io/tcp/443/wss/ipfs/Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6"]}},L=function(){function e(t){var n=this;Object(l.a)(this,e),this.identity={},this.items=[],this.channels=[],this.connect=Object(p.a)(c.a.mark((function e(){var t,o,r,a,s,i,l,u,d,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.loadingState=!1,t=O.a.type,S.a.addIdentityProvider(O.a),Q.addAccessController({AccessController:N.a}),(o={id:"local-id",type:t,mnemonicOpts:{}}).mnemonicOpts.mnemonic="swim usage treat horse inhale session radar balance minute rare surge gasp",e.next=8,S.a.createIdentity(o);case 8:return r=e.sent,console.log(S.a,r),e.next=12,S.a.verifyIdentity(r);case 12:return a=e.sent,console.log(a,"verifyIdentity"),n.identity=Object(g.a)({},r.toJSON(),{},{verified:a}),e.next=17,j.a.create(J);case 17:return n.ipfs=e.sent,(s=Object(g.a)({},A)).directory="directory",s.id=r.toJSON().id,s.identity=r,s.provider=S.a,s.AccessControllers=Q,e.next=26,M.createInstance(n.ipfs,s);case 26:return n.orbit=e.sent,e.next=29,n.orbit.kvstore("settings",{accessController:{type:O.a.type,write:[s.id]}});case 29:return(i=e.sent).events.on("ready",(function(){console.log("ready"),console.log(i.get("volume"))})),e.next=33,i.load();case 33:return l=Object.assign({accessController:{write:["*"],type:"polka-sr25519"}}),u={content:" Hello world from: "+window.navigator.userAgent,meta:{from:"this.userProfile",type:"text",ts:(new Date).getTime()}},d="globalChannel3",console.log(l),e.next=39,n.orbit.log(d,l);case 39:return(f=e.sent).load(),n.feed=f,["ready","write","load.progress","replicate.progress","replicated"].forEach((function(e){f.events.on(e,n.channelEvent.bind(n,e,d))})),console.log("Joined #".concat(d,", ").concat(f.address.toString())),e.next=47,f.load();case 47:setInterval(Object(p.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.add(u);case 2:case"end":return e.stop()}}),e)}))),3e4);case 48:case"end":return e.stop()}}),e)}))),this.channelEvent=function(){var e=Object(p.a)(c.a.mark((function e(t,o){var r,a,s,i,p,l,u,d=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=d.length,s=new Array(a>2?a-2:0),i=2;i<a;i++)s[i-2]=d[i];if((r=console).log.apply(r,["channelEvent",t,o].concat(s)),"ready"===t&&(p=n.feed.iterator({limit:-1}).collect().map((function(e){return e.payload.value})),console.log(p,"ready"),n.items=p),"string"===typeof t){e.next=5;break}return e.abrupt("return");case 5:if("string"===typeof o){e.next=7;break}return e.abrupt("return");case 7:l=n.channels[o],u={channelName:o,replicationStatus:l&&l.replicationStatus},console.log({action:"channel-event",name:t,meta:u,args:s});case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.rootStore=t}return Object(u.a)(e,[{key:"getItems",get:function(){return this.items.slice()}}]),e}(),D=Object(w.i)(L,{identity:w.n,channels:w.n,starting:w.n,stopping:w.n,isOnline:w.n,items:w.n,getItems:w.f}),I=new function e(){Object(l.a)(this,e),this.orbitStore=new D(this)};s.a.render(r.a.createElement(m.a,Object.assign({rootStore:I},I),r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},285:function(e,t){},696:function(e,t,n){e.exports=n(1757)},701:function(e,t,n){},703:function(e,t,n){},718:function(e,t){},720:function(e,t){},756:function(e,t){},758:function(e,t){},799:function(e,t){},816:function(e,t){},845:function(e,t){},918:function(e,t){},976:function(e,t){}},[[696,1,2]]]);
//# sourceMappingURL=main.d33ac796.chunk.js.map