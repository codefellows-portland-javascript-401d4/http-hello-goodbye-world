const http = require('http');

const server = http.createServer((req, resp) => {
  console.log(req.url);
  resp.statusCode = 200;
  if ((req.url === '/') || (req.url === '/hello')) {
    resp.write('Hello, world!');
  }
  else if (req.url === '/goodbye') {
    resp.write('Goodbye, world!');
  }
  else {
    resp.statusCode = 404;
    resp.write(`URL ${req.url} not found`);
  }
  resp.end();
});

const port = 3000;
server.listen(port, err => {
  if (err) console.log('ERROR! ', err);
  else console.log('server listening on port ' + port);
});