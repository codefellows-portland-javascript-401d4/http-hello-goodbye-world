const server = require('./http');

const port = 8080;

server.listen(port, err => {
  if (err) console.log('ERROR ', err);
  else console.log('http server listening on port: ', port);
});