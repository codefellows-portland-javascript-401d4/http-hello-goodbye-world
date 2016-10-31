const http = require('http');
const figlet = require('figlet');
const fs = require('fs');
const url = require('url'); //use to parse out querystring

const indexHtml = fs.createReadStream('index.html');

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  const parsedUrl = url.parse(req.url, true);
  const queryObj = parsedUrl.query;
  const pathname = parsedUrl.pathname;
  const httpVerb = req.method;

  if (req.url === '/') {
    indexHtml.pipe(res);
  }else if (pathname === '/hello' && queryObj.needs === 'time') {
    let d = new Date();
    let time = d.toTimeString();
    res.write(`Hello, the time is: ${time}`);
    res.end();
  }else if (pathname === '/hello' && queryObj.needs === 'date') {
    let d = new Date();
    let currentDate = d.toDateString();
    res.write(`Hello, the date is: ${currentDate}`);
    res.end();
  }else if (pathname === '/hello') {
    useFiglet('Hello World', 'Tinker-Toy');
    res.write(`hello world, you asked for the path: ${pathname}`);
    res.end();
  }else if (pathname === '/goodbye') {
    useFiglet('Goodbye', 'Jazmine', () => {
      useFiglet('World', 'Jazmine');
    });
    res.write(`goodbye world, you asked for the path: ${pathname}`);
    res.end();
  }else if (pathname === '/french-dip' && httpVerb === 'POST') {
    let body = '';
    req.on('data', function(chunk) {
      body += chunk;
    }).on('end', () => {
      figlet.text(body, {
        font: 'Pawp',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      }, function(err, data) {
        if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
        }
        res.write(data);
        res.end();
      });
    });
  }else if (pathname === '/french-dip') {
    useFiglet('au jus!!!!!', 'Pawp');
    res.write(`au jus!!!, you asked for the path: ${pathname}`);
    res.end();
  }else{
    console.log(`there is no path at ${pathname} please check your map`);
    res.statusCode = 404;
    res.write('404 not found');
    res.end();
  }
});

const port = 8080;
server.listen(port, err => {
  if (err) console.log('ERROR!', err);
  else console.log('http server listening on port', port);
});

function useFiglet(text, font, cb) {
  figlet.text(text, {
    font: font,
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }, function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    if (cb) cb();
    console.log(data);
  });
}

module.exports = server;