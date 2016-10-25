const http = require('http');
const fs = require('fs');
const figlet = require('figlet');
const urlParse = require('url').parse;
const indexHtml = fs.createReadStream('index.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const urlPath = urlParse(req.url).pathname;

    function figged(greeting) {
        figlet(greeting, (err, figletized) => {
            if (err) console.log(err);
            else console.log(`${figletized}`);
        });
    };

    if (urlPath === '/') {
        figged('welcome to the main index');
        res.write('welcome to the main index');
        res.end();
    } else if (urlPath === '/admin') {
        figged('welcome admin');
        res.write('welcome admin');
        res.end();
    } else {
        figged(`hello world, you asked for ${urlPath}`);
        res.write(`hello world, you asked for ${urlPath}`);
        res.end();
    };
});

const port = 3000;
server.listen(port, err => {
    if (err) console.log('ERROR!', err);
    else console.log('http server listening on port', port);
});