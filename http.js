const http = require('http');
const fs = require('fs');
const figlet = require('figlet');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('READ FAILURE');
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.write('Goodbye world :(');
    res.end();
  }
}); 

const port = 8080;

server.listen(port, err => {
  if (err) console.log('ERROR ', err);
  else console.log('http server listening on port: ', port);
});