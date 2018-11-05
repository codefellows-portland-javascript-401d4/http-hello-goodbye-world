const server = require('./http_server');
const port = process.env.PORT || 8888;

server.listen(port, err => {
  if (err) {
    console.log('You got an error: ', err);
  } else {
    console.log('HTTP server listening on port', port);
  }
});


