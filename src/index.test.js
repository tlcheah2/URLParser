import URLParser from '.'

let url = "https://www.youtube.com";


let urlParser = new URLParser(url);

/**
 * Simple
 */
test("getProtocol", () => {
    expect(urlParser.getProtocol()).toBe('https');
})

test("getHostname", () => {
    expect(urlParser.getHostName()).toBe('www.youtube.com');
})

let simpleUrl = "www.youtube.com";
let simpleUrlParser = new URLParser(simpleUrl);
test("getProtocol simple", () => {
    expect(simpleUrlParser.getProtocol()).toBe(null);
})

test("getHostname simple", () => {
    expect(simpleUrlParser.getHostName()).toBe('www.youtube.com');
})


/**
 * Advanced test case
 */

 let advancedUrl = "https://www.facebook.com/photo.php?fbid=10153655977779054&set=t.1368365816&type=3&theater";
 let advancedUrlParser = new URLParser(advancedUrl);

test("getProtocol adv", () => {
    expect(advancedUrlParser.getProtocol()).toBe('https');
})

test("getHostname adv", () => {
    expect(advancedUrlParser.getHostName()).toBe('www.facebook.com');
})

test("getPath adv", () => {
    expect(advancedUrlParser.getPath()).toBe('/photo.php');
})

test("getPort adv", () => {
    expect(advancedUrlParser.getPort()).toBe(null);
})

test("getQueryString adv", () => {
    expect(advancedUrlParser.getQueryString()).toBe('?fbid=10153655977779054&set=t.1368365816&type=3&theater');
})

test("getQueryObj adv", () => {
    expect(advancedUrlParser.getQueryObj()).toEqual({fbid: '10153655977779054', set: 't.1368365816', type: '3', theater: null });
})

