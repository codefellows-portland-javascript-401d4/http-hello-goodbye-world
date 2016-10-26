/** Created by Gloria on 10/24/16. **/

const http = require('http');
const url = require('url');
const route = require('./router');

function onRequest(request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log('Request for ' + pathname + ' received.');
  response.statusCode = 200;
  response.status = 'A-okay';

  route(pathname, response);
}

module.exports = http.createServer(onRequest);
