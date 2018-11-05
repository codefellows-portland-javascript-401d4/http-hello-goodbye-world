const server = require('./httpCowSayFiglet');
const port = 8080;

server.listen(port, err => {
  if(err) console('error', err);
  else console.log('http server listening on port', port);
});
