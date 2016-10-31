'use strict';

const http = require('http');
const fs = require('fs');
const parseUrl = require('url').parse;
const query = require('querystring');
const figlet = require('figlet');

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    const url = parseUrl(request.url);

    if (request.url === '/') {
        const hello = 'hello, world!';
        figlet(hello, {
            font: 'isometric2'
        }, (error, data) => {
         response.end(data);
      });
    } 
    else if (request.url === '/blue-heeler') {
        const acd = 'an alert, curious, & pleasant herding dog';
        figlet(acd, {
            font: 'stampatello'
        }, (error, data) => {
         response.end(data);
      });
    }
});

const port = 8080;
server.listen(port, error => {
    if (error) console.log('ERROR', `${error}`);
    else console.log(`http-server is listening on port ${port}`);
});

module.exports = server;