const http = require('http');
const url = require('url');
const fs = require('fs');
const index = fs.createReadStream('index.html');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  if (req.url === '/hello') {
    res.write('hello world');
  } else if (req.url === '/goodbye') {
    res.write('goodbye world');
  }
    index.pipe(res);
});

const port = 8888;
server.listen(port, err => {
  if (err) console.log('error: ', err);
  else console.log('serving on ' + port);
});
