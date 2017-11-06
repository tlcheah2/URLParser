const urlRegex = new RegExp(/(^\w+:\/\/)?([\w\.\d]+)?([\/\w.]+)?(\:)?(\d+)?(\?[\w=&.]+)?/);
/**
 * 
 * urlParts[] 
 * Index 1 - Protocol
 * Index 2 - Hostname
 * Index 3 - Path
 * Index 5 - Port
 * Index 6 - Query Parameter String
 */
class URLParser {

    constructor(url) {
        this._url = url;
        this._urlParts = this._parseUrl(url);
        // this._queryKeys = [];
        // this._queryValues = [];
        this._queryObj = {};
        this._queryObj = this._parseQueryString();
    } 

    _parseUrl(url) {
        if(url) {
            return url.split(urlRegex);
        }
        return null;
    }

    _getUrlParts(index) {
        if (this._urlParts[index]) 
            return this._urlParts[index];
        return null;
    }

    _parseQueryString() {
        let queryString = this.getQueryString();
        
        if(queryString && queryString.length > 0) {
            queryString = queryString.substring(1);
            let paramsArray = queryString.split(/&/);
            paramsArray.forEach((query) => {
                let keyAndValueArr = query.split(/=/);
                let objKey = keyAndValueArr[0] ? keyAndValueArr[0] : null;
                let objValue = keyAndValueArr[1] ? keyAndValueArr[1] : null;
                this._queryObj = Object.assign(this._queryObj, {[objKey]: objValue});
            })
        }
        return this._queryObj;
        
    }

    getProtocol() {
        let protocol = this._getUrlParts(1);
        if(protocol && protocol.length > 0) {
            let protocolArr = protocol.split(/:\/\//);
            return protocolArr[0];
        }
        return null;
    }

    getHostName() {
        return this._getUrlParts(2);
    }

    getPath() {
        return this._getUrlParts(3);
    }

    getPort() {
        return this._getUrlParts(5);
    }

    getQueryString() {
        return this._getUrlParts(6);
    }

    getQueryObj() {
        return this._queryObj;
    }

    
}

module.exports = URLParser;
