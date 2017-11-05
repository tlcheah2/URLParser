# Example

```shell
$ npm install urlparser-regex
```
or
```
$ yarn add urlparser-regex
```

```javascript
const URLParser = require('urlparser-regex')
//ES2015 modules
import URLParser from 'urlparser-regex'

let urlParser = new URLParser("https://www.facebook.com");
console.log('Protocol', urlParser.getProtocol()); //https
console.log('Hostname', urlParser.getHost()); //www.facebook.com
console.log('Path', urlParser.getPath());
console.log('Port', urlParser.getPort());
console.log('Query String', urlParser.getQueryString());
console.log('Query Object', urlParser.getQueryObj());
```