var exec = require('child_process').exec;
var figlet = require('figlet');

var figMe = (mssg, styles, cb) => {
  figlet(mssg, styles, (err, data) => {
    if(err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    cb(data);
  });
};

function hello(response) {
  figMe('Hello World', {font:'Broadway'}, (data) => {
    data;
    console.log('Request handler "hello" has been called.');
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write(data);
    response.end();
  });
};

function goodbye(response) {
  figMe('Goodbye World', {font: 'Dancing Font'}, (data) => {
    console.log('Request handler "goodbye" has been called');
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write(data);
    response.end();
  });
};

exports.hello = hello;
exports.goodbye = goodbye;