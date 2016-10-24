const http = require('http');
var figlet = require('figlet');

const server = http.createServer((request, response) => {
  console.log(request);
  console.log(request.url);
  response.statusCode = 200;
  if(request.url === '/') {
    response.write(figlet.textSync('Hello world!', {
      font: 'hollywood',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }));
  } else {
    response.write(figlet.textSync('Goodbye world', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }));
  }
  response.end();
});

const port = 8080;
server.listen(port, err => {
  if(err) console.log(err);
  else console.log('http server listening on port: ', port);
});
