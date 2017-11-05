const urlRegex = new RegExp(/(^\w+)(:\/\/)([\w\.\d]+)([\/\w.]+)(\:)?(\d+)?(\?)/);
/**
 * 
 * urlParts[] 
 * Index 1 - Protocol
 * Index 3 - Hostname
 * Index 4 - Path
 * Index 6 - Port
 * Index 8 - Query Parameter String
 */
class URLParser {

    constructor(url) {
        // super();
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
            let paramsArray = queryString.split(/&/);
            paramsArray.forEach((query) => {
                let keyAndValueArr = query.split(/=/);
                this._queryObj = Object.assign(this._queryObj, {[keyAndValueArr[0]]: keyAndValueArr[1]});
            })
        }
        return this._queryObj;
        
    }

    getProtocol() {
        return this._getUrlParts(1);
    }

    getHostName() {
        return this._getUrlParts(3);
    }

    getPath() {
        return this._getUrlParts(4);
    }

    getPort() {
        return this._getUrlParts(6);
    }

    getQueryString() {
        return this._getUrlParts(8);
    }

    getQueryObj() {
        return this._queryObj;
    }

    
}

module.exports = URLParser