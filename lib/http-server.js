const url = require('url');
const http = require('http');
// const fs = require('fs');
// const indexHtml = fs.createReadStream('index.html');

const qs = require('querystring');
const query = qs.stringify({ happy: 'halloween'});

const server = http.createServer((req, res) => {
    console.log(req.url);
    // res.statusCode = 200;
    if (url.parse(req.url).pathname == '/test1') {
        res.statusCode = 200;
        res.write('testing...testing is in progress');
    // indexHtml.pipe(res);
    } else if (url.parse(req.url).pathname == '/test2') {
        res.statusCode = 200;
        res.write('the requested url is as follows: http://localhost:8080/test2 the response text is: let the testing commence');
        // res.write(`Hello there captain!, ${req.url}`);
        // res.end();
    } else if (url.parse(req.url).query == query) {
        res.statusCode = 200;
        res.write('Happy Halloween!');
    } else if (url.parse(req.url).pathname == '/status204' ) {
        res.statusCode = 204;
    } else if (url.parse(req.url).pathname == '/nothing') {
        res.statusCode = 404;
        res.write('page not found');
    } else {
        res.statusCode = 404;
        res.write('page not found');
    }

    res.end();

});

module.exports = server;