const http = require('http');
const fs = require('fs');
const figlet = require('figlet');
const urlParse = require('url').parse;
const indexHtml = fs.createReadStream('index.html');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    const url = urlParse(req.url);
    const urlPath = url.pathname;
    const users = [{ name: 'foo' }, { name: 'bar'}, { name: 'qux'}];

    function figged(greeting) {
        figlet(greeting, (err, figletized) => {
            if (err) console.log(err);
            else console.log(`${figletized}`);
        });
    };

    function queryFormat(formatString) {
        if (formatString === 'text') {
            return 'text/plain';
        } else {
            return 'application/json';
        }
    };

    function pathConsoleResponse (pathDir) {
        if (pathDir === '/') {
            figged('welcome to the main index');       
        } else if (pathDir === '/admin') {
            figged('welcome admin');
        } else {
            figged(`hello world, you asked for ${pathDir}`);
        };
    };
    
    console.log('requested resource:', req.method, urlPath);
    
    const query = qs.parse(url.query);
    const type = queryFormat(query.format);
    pathConsoleResponse(urlPath);

    if (req.method === 'GET') {
        if (urlPath === '/users') {
            if (query.id === 'all') {
                res.statusCode = 200;
                res.setHeader('Content-Type', type);
                res.statusMessage = 'good to go!';
                res.end(JSON.stringify(users));
            } else {
                users.forEach((resource, index) => {
                    if (resource.name === query.id) {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', type);
                        res.statusMessage = 'good to go!';
                        res.end(JSON.stringify(resource));
                    };
                    if (index === (users.length - 1)) {
                        res.statusCode = 400;
                        res.statusMessage = 'no such user!';
                        res.end();
                    }; 
                });
            } 
        } else {
            res.statusCode = 400;
            res.statusMessage = 'need to set an id';
            red.end();
        };
    };
});

module.exports = server;
