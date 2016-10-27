const figlet = require('figlet');
const querystring = require('querystring');

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
    case '/dinosaurs':
      message = 'Dinosaurs are awesome';
      break;
    case '/admin':
      message = '403 Forbidden';
      response.statusCode = 403;
      response.status = 'Forbidden';
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
    response.write('\n' + pathname);
    response.end();
  });
}

function query(query, pathname, response) {
  var message;
  response.statusCode = 200;
  response.status = 'A-okay';

  for (key in query) {
    message = key + ': ' + query[key].toString();
  }

  figlet(message, (err, data) => {
    if (err) {
      console.log('You got an error: ', err);
    }
    response.write(data);
    response.write('\n' + pathname);
    response.end();
  });
}

function poster(pathname, request, response) {
  var message = '';
  response.statusCode = 200;
  response.status = 'A-okay';
  request.on('data', data => {
    message += data;
    if (message.length > 1e6) {  // close it down if the post is too big
      request.connection.destroy();
      response.statusCode = 413;
      response.status = 'Payload too large!';
    }
  });
  request.on('end', () => {
    var postdata = querystring.parse(message);
    var text = '';

    for (key in postdata) {
      text = key + ': ' + postdata[key].toString();
    }

    figlet(text, (err, data) => {
      if (err) {
        console.log('You got an error: ', err);
      }
      response.write(data);
      response.write('\n' + pathname);
      response.end();
    });
  });


}

exports.route = route;
exports.query = query;
exports.poster = poster;