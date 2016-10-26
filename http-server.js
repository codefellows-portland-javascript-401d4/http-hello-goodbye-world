const http = require('http');
const fs = require('fs');
var figlet = require('figlet');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;

    if (req.url === '/') {
        fs.readFile('index.html', 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('read page failed');
            }
            else {
                res.write(data);
                res.end();
            }
        });
    } else {
        res.write('goodbye, world!');
    }
});

const port = 8080;
server.listen(port, err => {
    if (err) console.log(`ERROR: ${err}`);
    else console.log(`http server is listening on port ${port}`);
});