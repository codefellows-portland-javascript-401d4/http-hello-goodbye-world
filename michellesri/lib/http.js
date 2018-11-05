const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
// const figlet = require('figlet');
const indexHtml = fs.createReadStream('index.html');

// ?key=value&key2=value

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url); //url.parse gives me an object that represents the url that's been passed
  const query = querystring.parse(parsedUrl.query);

  res.setHeader('content-type', 'text/html');
  // console.log('req = ' , req);
  res.statusCode = 200;
  if(req.url === '/'){
    if (req.method === 'GET'){
      res.write('the request method was a "GET"');
      indexHtml.pipe(res);
    }
    else if (req.method === 'POST'){
      res.write('the request method was a "POST"');
      res.end();
    }
  }
  else if(parsedUrl.pathname === '/blah' && (query != {})){
    res.setHeader('content-type', 'application/json');
    res.statusCode = 200;
    res.write(JSON.stringify(query));
    res.end();
  } else if(req.url === '/goodbye'){
    res.setHeader('content-type', 'text/html');
    res.statusCode = 200;
    res.write('this is the goodbye page');
    res.end();
  }

  else {
    res.statusCode = 400;
    res.write(`bad url request: ${req.url}`);
    res.end();
  }
});

const port = 9000;
server.listen(port, err => {
  if(err) return console.log('error: ', err);
  else console.log('server started on port: ', port);
});

module.exports = server;
