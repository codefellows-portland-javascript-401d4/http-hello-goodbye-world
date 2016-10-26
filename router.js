const figlet = require('figlet');

function route(pathname, response) {
  console.log('Routing request for ' + pathname);
  var message = '';
  response.statusCode = 200;
  response.status = 'A-okay';

  switch (pathname) {
    case '/':
      message = 'Welcome!';
      break;
    case '/hello':
      message = 'Hello world';
      break;
    case '/bye':
      message = 'Goodbye world';
      break;
    default:
      message = '404 Not Found!';
      response.statusCode = 404;
      response.status = 'Not found';
  }

  figlet(message, (err, data) => {
    if (err) {
      console.log('You got an error: ', err);
    }

    response.write(data);
    response.end();
  });
}

module.exports = route;