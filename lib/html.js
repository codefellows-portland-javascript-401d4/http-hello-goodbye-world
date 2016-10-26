const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    if (req.url === '/') {
        const stream = fs.createReadStream('index.html');
        stream.on('data', data => {
            res.write(data);
        });
    } else if (req.url === '/goodbye') {
        res.write('Goodbye world :(');
        res.end();
    } else {
        res.write('What is UPPP WORLD!!!')
        res.end();
    };
});

const port = 8080;

server.listen(port, err => {
    if(err) console.log('ERROR', err);
    else console.log('http server listening on port: ', port);
})

