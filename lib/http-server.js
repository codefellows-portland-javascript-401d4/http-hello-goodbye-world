const http = require('http');
const fs = require('fs');
const parseUrl = require('url').parse;
const qs = require('querystring');
server = {};


server.httpServer = http.createServer((req, res) => {
  const url = parseUrl(req.url);
  const query = qs.parse(url.query);
  console.log('query as string', url.query);
  console.log('query as object', query);
  if (req.method === "POST") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    server.requestBody = '{"name": "Nathan", "hometown": "Lantana"}';
    console.log('request body', server.requestBody);
    res.write(server.requestBody);
    res.end();
  } else if (url.query === 'passwords') {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Sorry, Bud. That's an invalid request.</h1><h2>400 (Bad Request)</h2>");
    res.end();
  } else if (url.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    server.indexHtml = fs.createReadStream('index.html');
    (server.indexHtml).on('data', data => {
      res.write(data);
    });
    (server.indexHtml).on('end', () => {
      res.end();
    });
  } else if (url.pathname === '/freeshit' && url.query === 'what=money') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>$$$$$$$$$$$</h1>');
    res.end();
  } else if (url.pathname === '/freeshit') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const freeShit = fs.createReadStream('freeshit.html');
    freeShit.pipe(res);
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>Hello world. You asked for ${req.url}.</h1><h2>I don't really have anything special for you based on that url.</h2>`);
    res.end();
  } 
});

module.exports = server;


