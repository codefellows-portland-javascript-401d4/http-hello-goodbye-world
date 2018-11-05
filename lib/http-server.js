const http = require('http');
const fs = require('fs');
const parseUrl = require('url').parse;
const qs = require('querystring');

module.exports = http.createServer((request, response) => {
  response.statusCode = 200;
  const url = parseUrl(request.url);

  console.log('requested resource:', request.method, url.pathname);


  const query = qs.parse(url.query);
  console.log('query as string', query);
  
  const type = query.format === 'text' ? 'text/plain' : 'application/json';
  response.setHeader('Content-Type', type);

  if (request.url === '/') {
    console.log('hello, world');
    response.end(JSON.stringify({name: 'foo'}));
  }
  if (request.url === '/about') {
    console.log('abooooot page');
    response.end(`about page`);
  }

  if(request.method === 'GET') {
    console.log('request method "get"');
    response.end(JSON.stringify('request method "get"'));
  }

  if(url.query) {
    console.log(`you requested ${url.query}`);
    response.end(`you requested ${url.query}`);
  }

  else {
    response.statusCode = 404;
    response.statusMessage = 'error';
  }

});

