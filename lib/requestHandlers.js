var exec = require('child_process').exec;
var figlet = require('figlet-cli');

function hello(response) {
  console.log('Request handler "hello" has been called.');

  exec('figlet -f "Ghost" "Hello World"', (error, stdout, stderr) => {
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write(stdout);
    response.end();
  });
};

function goodbye(response) {
  console.log('Request handler "goodbye" has been called');

  exec('figlet -f "Dancing Font" "Goodbye World"', (error, stdout, stderr) => {
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write(stdout);
    response.end();
  });
};

exports.hello = hello;
exports.goodbye = goodbye;