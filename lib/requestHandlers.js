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

function fourohfour(href, response) {
  figMe('BOO!!!\n- - -\n404\n- - -\n NOT FOUND', {font: 'Ghost'}, (data) => {
    console.log('Request handler "goodbye" has been called');
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write(data + `\nSorry, but ${href} is not a URL we know about.`);
    response.end();
  });
};

exports.hello = hello;
exports.goodbye = goodbye;
exports.fourohfour = fourohfour;