'use strict';

const http = require('http');
const fs = require('fs');
// const parseUrl = require('url').parse;
const qs = require('querystring');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    if (req.url === '/') {
        fs.readFile('index.html', 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('page read fail');
            } else {
                res.write(data);
                // console.log(parseUrl(req.url));
                res.end();
            }
        });

    } else if (req.url === '/this') {
        res.write(`hello world, ${req.url} is not the droid you're looking for?`);
        res.end();
    } else if (req.url === '/ferris') {
        res.write('Bueller...Bueller?');
        res.end();
    } else if (req.url === '/blazers') {
        res.end('GO BLAZERS!');
    } else if (req.url === '/blazers?player=lillard&position=point_guard') {
        console.log(qs.parse('player=lillard&position=point_guard'));
        res.end('It\'s Lillard Time!');
    } else if (req.url === '/post' && req.method === 'POST') {
        console.log('POSTED!!!');
        res.end('POSTED!!!!');
    } else {
        res.end('404 NOT FOUND!');
    }
});

const port = 8080;
server.listen(port, err => {
    if (err) console.log('Error', err);
    else console.log(`http server listening on port ${port}`);
});

module.exports = server;