const http = require('http');
const fs = require('fs');
const indexHtml = fs.createReadStream('index.html');
const aboutHtml = fs.createReadStream('about.html');


const server = http.createServer((req, res) =>{
  console.log(req.url);
  res.StatusCode = 200;
  if (req.url === '/') {
    indexHtml.pipe(res);
  }
  else if (req.url === '/about'){
    aboutHtml.pipe(res);
  }
  else {
    res.write(`Hello World, you asked for ${req.url}`);
    res.end();
  }
});

const port = 8080;
server.listen(port, err => {
  if(err) console.log('Error', err);
  else console.log('http server listening on port', port);
});
