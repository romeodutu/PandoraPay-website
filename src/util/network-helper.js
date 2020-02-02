class NetworkHelper {

    constructor(store){
        this._store = store;

        this.post = this.request;
        this.get = this.request;
    }

    request(address, body, json = true, timeout = 20000, includeSession = true ){

        return null;

    }

}

export default NetworkHelper;