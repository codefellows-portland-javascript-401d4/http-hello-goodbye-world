const http = require('http');
const fs = require('fs');
const figlet = require('figlet');
const urlParse = require('url').parse;
const indexHtml = fs.createReadStream('index.html');
const qs = require('querystring');
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

// function pathConsoleResponse (pathDir) {
//     if (pathDir === '/') {
//         figged('welcome to the main index');       
//     } else if (pathDir === '/admin') {
//         figged('welcome admin');
//     } else {
//         figged(`hello world, you asked for ${pathDir}`);
//     };
// };


function getHandler(urlPath, queryId, type, res) {
    if (urlPath === '/users') {
        if (queryId === 'all') {
            res.statusCode = 200;
            res.setHeader('Content-Type', type);
            res.statusMessage = 'good to go!';
            res.end(JSON.stringify(users));
        } else {
            users.forEach((resource, index) => {
                if (resource.name === queryId) {
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
        };         
    } else if (urlPath === '/') {
        figged('welcome to the main index');
        res.end();       
    } else if (urlPath === '/admin') {
        figged('welcome admin');
        res.end();
    } else {
        figged(`hello, you asked for ${urlPath} but it doesn't exist`);
        res.statusCode = 400;
        res.statusMessage = 'need to set an id';
        res.end();
    };
};

function postHandler(urlPath, queryId, type, req, res) {
    var body = '';
    if (urlPath === '/users') {
        req.on('data', data => {
            body += data.toString('utf8');
        });
        req.on('end', () => {
            console.log('this is the body', body);
            res.statusCode = 200;
            res.statusMessage = 'need to set an id';
            res.end();
        });
    } else {
        figged(`hello, you asked to post in ${urlPath} but it doesn't exist`);
        res.statusCode = 400;
        res.statusMessage = 'need to set an id';
        res.end();
    };
};

const server = http.createServer((req, res) => {
    const url = urlParse(req.url);
    const urlPath = url.pathname;
    
    console.log('requested resource:', req.method, urlPath);
    //console.log('the request stuffs',req);    
    const query = qs.parse(url.query);
    const type = queryFormat(query.format);
    // pathConsoleResponse(urlPath);

    if (req.method === 'GET') {
        getHandler(urlPath, query.id, type, res);
    } else if (req.method === 'POST') {
        postHandler(urlPath, query, type, req, res);
    } else {
        res.statusCode = 400;
        res.statusMessage = 'not a valid request';
        res.end();
    };
});

module.exports = server;
