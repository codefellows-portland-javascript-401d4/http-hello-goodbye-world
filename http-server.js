'use strict';

const http = require('http');
const fs = require('fs');
const parseUrl = require('url').parse; 
const qs = require('querystring');
const figlet = require('figlet');

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    const url = parseUrl(request.url);

    if (request.url === '/') {
        const hello = 'hello, \n world';
        figlet(hello, {
            font: 'isometric2',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, (error, data) => {
         response.end(data);
      });
    } 
    else if (request.url === '/blue-heeler?type=dog&breed=acd') {
        console.log(qs.parse('/blue-heeler?type=dog&breed=acd'));
        const acd = 'australian \n cattle dog';
        figlet(acd, {
            font: 'avatar',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, (error, data) => {
         response.end(data);
      });
    }
    else if (request.url === '/get' && request.method === 'GET') {
        const akcSays = 'an alert, curious, & pleasant herding dog';
        figlet(akcSays, {
            font: 'stampatello',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, (error, data) => {
         response.end(data);
      });
    }
    else if(request.url === '/end') {
        const goodbye = 'goodbye, \n world';
        figlet(goodbye, {
            font: 'isometric2',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, (error, data) => {
         response.end(data);
      });
    }
    else {
        response.statusCode = 400;
        response.end('ERROR: PAGE NOT FOUND');
    }
});

const port = 8080;
server.listen(port, error => {
    if (error) console.log('ERROR', `${error}`);
    else console.log(`http-server is listening on port ${port}`);
});

module.exports = server;