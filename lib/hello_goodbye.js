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
        response.write('you requested http://localhost:5000/goodbye Your response text is: goodbye world');
    }  else if (url.parse(request.url).query == query ) {
        response.statusCode = 200;
        response.write('foo bar!');
    }  else if (url.parse(request.url).pathname == '/noContent' ) {
        response.statusCode = 204;
    }  else if (url.parse(request.url).pathname == '/wtf' ) {
        response.statusCode = 404;
        response.write('page not found');
    }  else if (request.method == 'DELETE') {
        response.statusCode = 200;
        response.write('data has been deleted');
    }  else {
        response.statusCode = 404;
        response.write('page not found');
    }

    response.end();
});

module.exports = server;
