const http = require('http');
const parseUrl = require('url').parse;
const parseQS = require('querystring').parse;
const fs = require('fs');
const html = fs.createReadStream('index.html');

function onReq(req, res) {
    let url = parseUrl(req.url);
    let query = parseQS(url.query);
    if (url.query === 'foo=bar') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(`You queried ${url.query}, JSON: ${JSON.stringify(query)}`);
        res.end();
    } else if (req.method === 'POST') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Your method was ' + req.method);
        res.end();
    } else if (url.pathname === '/') {
        html.pipe(res);
    } else if (url.pathname === '/hello') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(`Hello World (found at ${req.url})`);
        res.end();
    } else if (url.pathname === '/goodbye') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(`Goodbye World (found at ${req.url})`);
        res.end();
    } else if (url.pathname === '/nevermore') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(`Quoth the raven at ${req.url}.`);
        res.end();
    } else {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.write('Path ' + url.pathname + ' does not exist.');
        res.end();
    }
}

module.exports = http.createServer(onReq);
