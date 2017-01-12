const http = require('http');
const parseUrl = require('url').parse;
const qs = require('querystring'); //eslint no-unused-vars

const server = http.createServer((req, res) => {
    const url = parseUrl(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if ((req.url === '/hello' || req.url === '/')) {
        res.end('hello, \nworld');
    }
    else if(req.url === '/goodbye') {
        res.end('goodbye, \nworld');
    }
    else if (url.query) {
        let type = url.query.format || 'text';
        res.setHeader('Content-Type', type);
        res.end('You requested: ' + url.search);
        res.statusCode = 400;
    }
    else if (req.method === 'POST') {
        res.end('ERROR, BAD REQUEST');
    }
    else {
        const err = res.statusCode = 400;
        res.end(`${err} ERROR, BAD REQUEST`);
    }
});

const port = 8080;
server.listen(port, err => {
    if (err) console.log(`ERROR, ${err}`);
    else console.log(`http-server is listening on port ${port}`);
});

module.exports = server;
