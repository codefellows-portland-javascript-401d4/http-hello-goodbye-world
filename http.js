const http = require('http');
const fs = require('fs');
const parseUrl = require('url').parse;
const qs = require('querystring');

const server = http.createServer((req, res) => {
  let method = req.method;
  let reqPath = parseUrl(req.url);
  let queryStr = reqPath.query;
  let query = qs.parse(queryStr);

  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('READ FAILURE');
      } else {
        res.write(data);
        console.log(res.text);
        res.end();
      }
    });
  } else if (method === 'POST' && reqPath.pathname === '/bacon') {
    res.writeHead(200, {
      'Content-Type': 'text/html' 
    });
    res.write(JSON.stringify(query));
    res.end();
  } else {
    res.statusCode = 404;
    res.statusMessage = 'Not found';
    res.write('You have requested: ' + reqPath.pathname + ' (BUT WE DIDN\'T WRITE THAT PAGE, SORRY)');
    res.end();
  }
}); 

module.exports = server;