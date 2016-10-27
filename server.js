'use strict';

const http = require('http');
const fs = require('fs');

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
                res.end();
            }
        });

    } else if (req.url === '/this') {
        res.write(`hello world, ${req.url} is not the droid you're looking for?`);
        res.end();
    } else if (req.url === '/ferris') {
        res.write('Bueller...Bueller?');
        res.end();
    }
});

const port = 8080;
server.listen(port, err => {
    if (err) console.log('Error', err);
    else console.log(`http server listening on port ${port}`);
});