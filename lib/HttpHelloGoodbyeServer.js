const http = require('http');

module.exports = http.createServer((req, resp) => {
  console.log(`Received request for ${req.url}`);
  resp.statusCode = 200;
  if ((req.url === '/') || (req.url === '/hello')) {
    resp.write('Hello, world!');
  }
  else if (req.url === '/goodbye') {
    resp.write('Goodbye, world!');
  }
  else if (req.url === '/hows-the-weather') {
    resp.write('It\'s cool and rainy. :-(');
  }
  else {
    resp.statusCode = 404;
    resp.write(`I don't know the URL ${req.url}. Please request /hello, /hows-the-weather, or /goodbye`);
  }
  resp.end();
});