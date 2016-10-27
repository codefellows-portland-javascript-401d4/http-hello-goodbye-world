const http = require('http');
const url = require('url');
const fs = require('fs');
const html = fs.createReadStream('index.html');

function onReq(req, res) {
    let pathname = url.parse(req.url).pathname;
    if (pathname === '/') {
        html.pipe(res);
    } else if (pathname === '/hello') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World');
        res.end();
    } else if (pathname === '/goodbye') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Goodbye World');
        res.end();
    } else {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.write('Path ' + pathname + ' does not exist.')
        res.end();
    }
}

http.createServer(onReq).listen(8080);
