const http = require('http');
const parseUrl = require('url').parse;
const fs = require('fs');
const index = fs.createReadStream('index.html');
const qs = require('querystring');

const server = http.createServer((req, res) => {
      const url = parseUrl(req.url, true);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');

      if ((req.url === '/hello') || (req.url ==='/')) {
        res.write('hello world');
      } else if (req.url === '/goodbye') {
        res.write('goodbye world');
      } else if (req.method === 'POST') {
        res.end('You added a new resource: ' + req.url);
      } else if (url.query) {
        let type = url.query.format || 'text';
        res.setHeader('Content-Type', type);
        res.end('You requested: ' + url.search);
        res.statusCode = 400;
      } else {
        res.end('Not found: You requested ' + req.url + ', which is not a valid path.');
      }
      index.pipe(res);
});

const port = 8888;

server.listen(port, err => {
  if (err) console.log('error: ', err);
  else console.log('serving on ' + port);
});

module.exports = server;