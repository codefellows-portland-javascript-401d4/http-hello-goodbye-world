const http = require('http');
const fs = require('fs');
const indexHtml = fs.createStream('index.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;

    if(req.url === '/') {
        fs.readFile('index.html', 'utf-8', (err, data) => {
            if(err) {
                res.statusCode = 500;
            res.end('read page failed');
            }
            else {
                res.write(data);
                res.end();
            }
        });

        const stream = fs.createReadStream('index.html');
        stream.on('data', data => {
            rest.write(data);
        });

        stream.on('end', () => {
            res.end();
        });

        indexHtml.pipe(res);
    }
    else {
        res.write(`hello, world! you requested ${req.url}`);
        res.end();
    }
});

const port = 8080;
server.listen(port, err => {
    if(err) console.log('ERROR', err);
    else console.log('http server is listening on port', port);
});