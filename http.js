const http = require('http');
const fs = require('fs');
const cowsay = require('cowsay');
const indexHtml = fs.createReadStream('index.html');

// create new instance of http server
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200; // http status code 200 = okay
  if (req.url === '/') {
    indexHtml.pipe(res);
  }
  else if (req.url === '/happy_cow') {
    res.write('hello wonderful world!');
    console.log(cowsay.say({
      text : 'hello wonderful world!',
      e : '^^',
      T : 'U '
    }));
    res.end();
  }
  else if (req.url === '/angry_cow') {
    res.write('eat cow pies and die!!!');
    console.log(cowsay.say({
      text : 'eat cow pies and die!!!',
      e : '@@'
    }));
    res.end();
  }
});

const port = 8080;
server.listen(port, err => {
  if(err) console('error', err);
  else console.log('http server listening on port', port);
});
