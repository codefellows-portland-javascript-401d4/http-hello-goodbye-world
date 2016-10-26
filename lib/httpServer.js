const http = require('http');
const fs = require('fs');
const figlet = require('figlet');
const urlParse = require('url').parse;
const indexHtml = fs.createReadStream('index.html');
const qs = require('querystring');
const path = require('path');
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


function getHandler(urlPathObject, cb) {
    if (urlPathObject.base === 'users' && urlPathObject.name === 'users') {
        cb(null, JSON.stringify(users));
    } else if (urlPathObject.dir === '/users') {
        users.forEach((resource, index) => {
            if (resource.name === urlPathObject.name) {
                cb(null, JSON.stringify(resource));
            };
            if (index === (users.length - 1)) {
                cb('no such user!');
            }; 
        });         
    } else if (urlPathObject.dir === '/' && urlPathObject.name.length === 0) {
        figged('welcome to the main index');
        cb(null, 'welcome to the main index');       
    } else if (urlPathObject.dir === '/' && urlPathObject.name === 'admin') {
        figged('welcome admin');
        cb(null, 'welcome admin');
    } else {
        figged(`hello, you asked for ${urlPathObject.dir} but it doesn't exist`);
        cb(null, `hello, you asked for ${urlPathObject.dir} but it doesn't exist`);
    };
};

function postHandler(urlPathObject, req, cb) {
    var body = '';
    if (urlPathObject.base === 'users' && urlPathObject.name === 'users') {
        req.on('data', data => {
            body += data.toString('utf8');
        });
        req.on('end', () => {
            console.log('this is the body', body);
            try {
                if (typeof(JSON.parse(body)) === 'object') {
                    cb(null, body);
                };
            } catch (err) {
                cb('not valid JSON data');
            };
        });
    } else {
        figged(`hello, you asked to post in ${urlPathObject.dir} but it doesn't exist`);
        cb(`hello, you asked to post in ${urlPathObject.dir} but it doesn't exist`);
    };
};

const server = http.createServer((req, res) => {
    const url = urlParse(req.url);
    const urlPath = url.pathname;
    const parsedPath = path.parse(url.pathname);
    console.log('the parsed path base is', parsedPath);

    console.log('requested resource:', req.method, urlPath);
    //console.log('the request stuffs',req);    
    const query = qs.parse(url.query);
    const type = queryFormat(query.format);
    // pathConsoleResponse(urlPath);

    if (req.method === 'GET') {
        getHandler(parsedPath, (err, data) => {
            if (err) {
                res.statusCode = 400;
                res.statusMessage = err;
                res.end(err);
            } else {
                res.setHeader('Content-Type', type);
                res.statusCode = 200;
                res.statusMessage = 'good to go!';
                res.end(data);
            };
        });
    } else if (req.method === 'POST') {
        postHandler(parsedPath, req, (err, data) => {
            if (err) {
                res.statusCode = 400;
                res.statusMessage = err;
                res.end(err);
            } else {
                res.setHeader('Content-Type', type);
                res.statusCode = 200;
                users.push(data);
                res.statusMessage = 'post accepted';
                res.end();
            };
        });
    } else {
        res.statusCode = 400;
        res.statusMessage = 'not a valid request';
        res.end();
    };
});

module.exports = server;
