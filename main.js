

const URLParser = require('./src/index.js');

let searchStr = "https://www.google.com/search?source=hp&ei=6JX9WdHOL4iBvwSfzZvABw&q=dog+poodle&oq=dog+poodle&gs_l=psy-ab.3..0l10.1387.5262.0.5381.15.12.2.0.0.0.228.1046.0j5j1.6.0....0...1.1.64.psy-ab..7.8.1060.0..46j0i46k1j0i20i263k1.0.yq1U2F00hKY";

let searchUrl = new URLParser(searchStr);

console.log('getProtocol', searchUrl.getProtocol());

searchUrl.getQueryObj();