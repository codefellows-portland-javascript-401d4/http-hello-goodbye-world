const http = require('http');
const url = require('url');
// const parseUrl = require('url').parse;

const qs = require('querystring');

const query = qs.stringify({ foo: 'bar'});

// console.log(typeof query);

const server = http.createServer(function (request, response) {

    console.log(request.method);

    if ( url.parse(request.url).pathname == '/hello' ) {
        response.statusCode = 200;
        response.write('hello world');
    }  else if (url.parse(request.url).pathname == '/goodbye' ) {
        response.statusCode = 200;
        response.write('goodbye world');
    }  else if (url.parse(request.url).query == query ) {
        response.statusCode = 200;
        response.write('foo bar!');
    }  else if (url.parse(request.url).pathname == '/wtf' ) {
        response.statusCode = 404;
        response.write('page not found!');
    }   else if (something) {

    }   else {
        response.statusCode = 404;
        response.write('page not found');
    }

    response.end();
});

module.exports = server;
