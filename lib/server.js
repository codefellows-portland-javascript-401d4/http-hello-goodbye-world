const http = require('http');
const parseUrl = require('url').parse;
const qs = require('querystring');
var figlet = require('figlet');
const cats = require('./cats');

const server = http.createServer((request, response) => {
  const url = parseUrl(request.url);
  const query = qs.parse(url.query);

  response.statusCode = 200;
  if(url.pathname === '/') {
    response.body = { message: 'Hello World!'};
    response.write(figlet.textSync(response.body.message, {
      font: 'hollywood',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }));
    response.end();
  } else if(url.pathname === '/goodbye') {
    response.write(figlet.textSync('Goodbye world', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }));
    response.end();
  } else if(query.id) {
    var queryResults = cats.findCatById(query.id);
    if(queryResults) {
      queryResults.forEach((cat) => {
        response.write(cat.name + ' the cat is ' + cat.age + ' years old!');
      });
    } else {
      response.write('sorry no cats match your search');
    }
    response.end();
  } else if(request.url === '/post' && request.method == 'POST') {
    response.write(figlet.textSync('thank you for posting'));
    response.end();
  } else {
    response.statusCode = 404;
    response.write(figlet.textSync(response.statusCode + ' PAGE NOT FOUND', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }));
    response.end();
  }
});

const port = 8080;
server.listen(port, err => {
  if(err) console.log(err);
  else console.log('http server listening on port: ', port);
});

module.exports = server;
