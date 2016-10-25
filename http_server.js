/** Created by Gloria on 10/24/16. **/

const http = require('http');
const url = require('url');

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');
    response.statusCode = 200;
    response.status = 'A-okay';

    route(pathname, response);
  }

  const port = 8080;

  http.createServer(onRequest).listen(port, err => {
    if (err) {
      console.log('You got an error: ', err);
    } else {
      console.log('http server listening on port', port);
    }
  });
}

exports.start = start;