import OrbitStore from './OrbitStore';

class RootStore {
    constructor() {
        this.orbitStore = new OrbitStore(this);
    }
}

export default RootStore;



