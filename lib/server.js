var http = require('http');
var url = require('url');

function hello(route, handle) {

  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname; 
    var href = url.parse(request.url).href;
    var query = url.parse(request.url).query;
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

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
};

exports.hello = hello;