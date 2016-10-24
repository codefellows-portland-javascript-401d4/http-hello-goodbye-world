const http = require('http');
const fs = require('fs');
const indexHtml = fs.createReadStream('index.html');
const freeShit = fs.createReadStream('freeshit.html');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    indexHtml.pipe(res);
  } else if (req.url === '/freeshit') {
    freeShit.pipe(res);
  } else {
    res.write(`Hello world. You asked for ${req.url}. I don't really have anything special for you based on that url.`);
    res.end();
  }
});

const port = 8080;
server.listen(port, err => {
  if(err) console.log('ERROR!', err);
  else console.log('http server listening on port', port);
});

