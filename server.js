const http = require('http');
const fs = require('fs');
const parseUrl = require('url').parse;


const server = http.createServer((req, res) =>{
  console.log(req.url);
  res.StatusCode = 200;
  const url = parseUrl(req.url);
  console.log('requested resource ', req.method, url.pathname);

  if(req.method === 'PATCH'){
    console.log('I have received your PATCH request', req.method);
    res.end('successful');
  }
  else if (req.url === '/') {
    fs.readFile('index.html', 'utf-8', (err, data) => {
      if(err) {
        res.StatusCode = 400;
        res.end('page read fail');
      }
      else{
        res.write(data);
        res.end();
      }
    });
  }
  else if (req.url === '/about'){
    fs.readFile('about.html', 'utf-8', (err, data) => {
      if(err) {
        res.StatusCode = 400;
        res.end('page read fail');
      }
      else{
        res.write(data);
        res.end();
      }
    });
  }
  else if(url.query === 'jade=8'){
    res.write(`you requested ${url.query} which is a type of stone`);
    res.end();
  }
  else {
    res.write('I cannot fulfill your request');
    res.end();
  }
});

const port = 8080;
server.listen(port, err => {
  if(err) console.log('Error', err);
  else console.log('http server listening on port', port);
});
module.exports = server;