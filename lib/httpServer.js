const http = require('http');
const fs = require('fs');
const indexHtml = fs.createReadStream('index.html');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  if (req.url === '/') {
    fs.readFile('index.html', 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('page read fail');
      }else{
        res.write(data);
        res.end();
      }
    });
    indexHtml.pipe(res);
  }else if (req.url === '/hello') {
    res.write(`hello world, you asked for ${req.url}`);
    res.end();
  }else if (req.url === '/goodbye') {
    res.write(`goodbye world, you asked for ${req.url}`);
    res.end();
  }
});

const port = 8080;
server.listen(port, err => {
  if (err) console.log('ERROR!', err);
  else console.log('http server listening on port', port);
});

