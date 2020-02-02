const axios = require('axios');

class HttpHelper {

    constructor(store){
        this._store = store;
    }

    get(address, body, json = true, timeout = 20000){

        return axios.get(address, body);

    }

    post(address, body, json = true, timeout = 20000){

        return axios.post(address, body);

    }

}

export default HttpHelper;