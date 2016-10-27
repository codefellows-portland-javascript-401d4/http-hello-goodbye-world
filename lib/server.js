var http = require('http');
var url = require('url');

function hello(route, handle) {

  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname; 
    var href = url.parse(request.url).href;
    console.log('Request for ' + href + ' received');

    route(handle, href, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
};

exports.hello = hello;