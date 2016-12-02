const server = require('./lib/hello-server');

server.listen(8888, () => {
  console.log('Server has started.');
});