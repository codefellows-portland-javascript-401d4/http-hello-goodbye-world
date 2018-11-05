const http = require('http');
const  parseUrl = require('url').parse;
const route = require('./lib/router');

const port = process.env.PORT || 3500;

const server = http.createServer((request, response) => {
    const url = parseUrl(request.url);
    route(url, request, response);
})

server.listen(port, err => {
    if(err) console.log('ERROR', err);
    else console.log('http server listening on port: ', port);
})

module.exports = server;