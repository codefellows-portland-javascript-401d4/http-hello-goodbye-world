const http = require('http');
const parseUrl = require('url').parse;
const qs = require('querystring');
const figlet = require('figlet');

module.exports = http.createServer((req, res) => {
    const url = parseUrl(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if ((req.url === '/hello' || req.url === '/')) {
        figlet('hello, \nworld', (err, data) => {
            res.end(data);
        });
    }
    else if(req.url === '/goodbye') {
        figlet('goodbye, \nworld', (err, data) => {
            res.end(data);
        });
    }
    else if (url.query) {
        let type = url.query.format || 'text';
        res.setHeader('Content-Type', type);
        res.end('You requested: ' + url.search);
        res.statusCode = 400;
    }
    else if (req.url === '/post' && req.method === 'POST') {
        res.write('You posted: ', req.url);
    }
    else {
        const err = res.statusCode = 400;
        res.end(`${err} ERROR, BAD REQUEST`);
    }
});

const port = 8080;
server.listen(port, error => {
    if (err) console.log('ERROR', `${err}`);
    else console.log(`http-server is listening on port ${port}`);
});
