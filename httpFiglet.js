const http = require('http');
const fs = require('fs');
const figlet = require('figlet');
const indexHtml = fs.createReadStream('index.html');

// create new instance of http server
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200; // http status code 200 = okay
  if (req.url === '/') {
    indexHtml.pipe(res);
  }
  if (req.url === '/halloween') {
    res.write('happy halloween!');
    figlet.text('Boo!', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }, function(err, data) {
      if (err) {
        console.log('400 - gremlins');
        return;
      }
      console.log(data);
    });
  }
});

const port = 8080;
server.listen(port, err => {
  if(err) console('error', err);
  else console.log('http server listening on port', port);
});
