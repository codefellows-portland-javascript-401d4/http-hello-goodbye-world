const http = require('http');
const url = require('url');

const router = require('./router');
const route = router.route;
const handle = router.handle;

const requestHandlers = require('./requestHandlers');


function onRequest(request, response) {
  const pathname = url.parse(request.url).pathname; 
  const href = url.parse(request.url).href;
  const query = url.parse(request.url).query;
  console.log('Server query: ' + query);
  console.log('Request for ' + pathname + ' received');
  console.log(request.method);
  if(request.method !== 'GET' && request.method !== 'HEAD') {
    response.write(`405 ${request.method} METHOD NOT ALLOWED`);
    response.end();
    return;
  }
  route(handle, href, pathname, response, query);
}

module.exports = http.createServer(onRequest);
