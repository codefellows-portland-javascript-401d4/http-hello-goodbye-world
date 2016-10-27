const http = require('http');
const fs = require('fs');
// const figlet = require('figlet');
const indexHtml = fs.createReadStream('index.html');
const blahHtml = fs.createReadStream('blah.html');


const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  if(req.url === '/'){
    indexHtml.pipe(res);
  } else if (req.url === '/blah'){
    blahHtml.pipe(res);
  } else {
    res.write(`the url you requested is: ${req.url}`);
    // console.log(figlet('Wahoo'));
    // res.setHeader('content-type', 'text/html');
    res.end();
  }
});

const port = 9000;
server.listen(port, err => {
  if(err) return console.log('error: ', err);
  else console.log('server started on port: ', port);
});
