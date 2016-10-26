const http = require('http');
const fs = require('fs');
const indexHtml = fs.createReadStream('index.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    if (req.url === '/') {

    indexHtml.pipe(res);
    } else if (req.url === '/this') {
        res.write(`hello world, ${req.url}`);
        res.end();
    }
});

const port = 8080;
server.listen(port, err => {
    if(err) console.log('ERROR!', err);
    else console.log('http server listening on port', port);
});