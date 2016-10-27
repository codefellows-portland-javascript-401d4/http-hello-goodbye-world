const http = require('http');
const figlet = require('figlet');
const fs = require('fs');
const url = require('url'); //use to parse out querystring

const indexHtml = fs.createReadStream('index.html');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  
  const parsedUrl = url.parse(req.url, true);
  const queryObj = parsedUrl.query;
  console.log('queryObj', queryObj);
  const pathname = parsedUrl.pathname;

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
  }else if (pathname === '/french-dip') {
    useFiglet('au jus!!!!!', 'Pawp');
    res.write(`au jus!!!, you asked for the path: ${pathname}`);
    res.end();
  }else if (pathname === '/french-dip' && req.method === 'POST') {
    console.log('in the post part of conditional');
    //take post and create a ascii file using figlet? and put it on page?
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