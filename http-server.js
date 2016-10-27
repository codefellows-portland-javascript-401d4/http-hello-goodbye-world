const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;

    if (req.url === '/') {
        res.write('hello, world!');
        res.end();
    } 
    else {
        res.write('goodbye, world!');
        res.end();
    }
});

const port = 8080;
server.listen(port, err => {
    if (err) console.log(`ERROR: ${err}`);
    else console.log(`http server is listening on port ${port}`);
});