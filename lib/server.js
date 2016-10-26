const http = require('http');
const url = require('url');
const fs = require('fs');
const index = fs.createReadStream('index.html');

const server = http.createServer((req, res) => {
      console.log(req.url);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      if (url.pathname )

      if ((req.url === '/hello') || (req.url ==='/')) {
        res.write('hello world');
      } else if (req.url === '/goodbye') {
        res.write('goodbye world');
      } else {
        res.statusCode = 400;
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