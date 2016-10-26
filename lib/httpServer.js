const http = require('http');
const figlet = require('figlet');
const fs = require('fs');

const indexHtml = fs.createReadStream('index.html');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  if (req.url === '/') {
    indexHtml.pipe(res);
  }else if (req.url === '/hello') {
    useFiglet('Hello World', 'Tinker-Toy');
    res.write(`hello world, you asked for the path: ${req.url}`);
    res.end();
  }else if (req.url === '/goodbye') {
    useFiglet('Goodbye', 'Jazmine', () => {
      useFiglet('World', 'Jazmine');
    });
    res.write(`goodbye world, you asked for the path: ${req.url}`);
    res.end();
  }else{
    res.write(`there is no path at ${req.url} please check your map`);
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