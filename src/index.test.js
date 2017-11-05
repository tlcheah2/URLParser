import URLParser from '.'

// let url = "https://www.youtube.com/watch?v=WareYBKqbzs";
let url = "https://www.youtube.com";


let urlParser = new URLParser(url);

test("getProtocol", () => {
    expect(urlParser.getProtocol()).toBe('https');
})

test("getHostname", () => {
    console.log('urlParser.getHostName()', urlParser.getHostName());
    expect(urlParser.getHostName()).toBe('www.youtube.com');
})