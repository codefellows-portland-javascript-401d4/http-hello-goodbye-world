function hello(response) {
  console.log('Request handler "hello" has been called.');
  response.writeHead(200, {'content-type': 'text/plain'});
  response.write('Hello World');
  response.end();
};

function goodbye(response) {
  console.log('Request handler "goodbye" has been called');
  response.writeHead(200, {'content-type': 'text-plain'});
  response.write('Goodbye World');
  response.end();
};

exports.start = hello;
exports.upload = goodbye;