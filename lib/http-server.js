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
        console.log('You requested:', request.url)
        const hello = 'hello, \nworld';
        figlet(hello, {
            font: 'isometric2',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, (error, data) => {
         response.end(data);
      });
    } 
    else if (request.url === '/blue-heeler?type=dog&breed=acd') {
        console.log('You requested:', qs.parse('/blue-heeler?type=dog&breed=acd'));
        const acd = 'australian \ncattle dog';
        figlet(acd, {
            font: 'avatar',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, (error, data) => {
         response.end(data);
      });
    }
    else if (request.url === '/get' && request.method === 'GET') {
        console.log('You requested:', request.url)
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
        console.log('You requested:', request.url)
        const goodbye = 'goodbye, \nworld';
        figlet(goodbye, {
            font: 'isometric2',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, (error, data) => {
         response.end(data);
      });
    }
    else {
        const error = response.statusCode = 400;
        response.end(`${error} ERROR \nBAD REQUEST`);
    }
});

const port = 8080;
server.listen(port, error => {
    if (error) console.log('ERROR', `${error}`);
    else console.log(`http-server is listening on port ${port}`);
});

module.exports = server;
