const figlet = require('figlet');


function route(pathname, response) {
  console.log('Routing request for ' + pathname);

  if (pathname === '/') {
    var message = 'Welcome!';
  } else if (pathname === '/hello') {
    var message = 'Hello world';
  } else if (pathname === '/bye') {
    message = 'Goodbye world';
  } else {
    message = pathname;
  }

  figlet(message, (err, data) => {
    if (err) {
      console.log('You got an error: ', err);
    }
    response.write(data);
    response.end();

  });
}

exports.route = route;