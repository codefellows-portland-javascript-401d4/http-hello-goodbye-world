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
    figlet.text('Hello World!', {
      font: 'Tinker-Toy',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }, function(err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);
    });
    res.write(`hello world, you asked for the path: ${req.url}`);
    res.end();
  }else if (req.url === '/goodbye') {
    figlet.text('Goodbye', {
      font: 'Jazmine',
      horizontalLayout: 'fitted',
      verticalLayout: 'default'
    }, function(err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);
    });
    figlet.text('World!', {
      font: 'Jazmine',
      horizontalLayout: 'fitted',
      verticalLayout: 'default'
    }, function(err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);
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

