const http = require('http');
const fs = require('fs');
// const indexHtml = fs.createReadStream('index.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    if (req.url === '/') {
        // /* read the file in single chunk and send back */
        // fs.readFile('index.html', 'utf-8', (err, data) => {
        //     if (err) {
        //         res.statusCode = 500;
        //         res.end('page read fail');
        //     }
        //     else {
        //         res.write(data);
        //         res.end();
        //     }
        // });

        // stream each chunk from file to web response
        const stream = fs.createReadStream('index.html');
        stream.on('data', data => {
            res.write(data);
        });
        stream.on('end', () => {
            res.end();
        });

        // indexHtml.pipe(res);
    } else if (req.url === '/GB') {
        res.write(`Good Bye Coding World! ${req.url}`);
        res.end();        
    } else {
        res.write(`Halloo World!, you asked for ${req.url}`);
        res.end();
    }
});

const port = 9002;
server.listen(port, err => {
    if(err) console.log('ERROR!', err);
    else console.log('http server listening on port', port);
});