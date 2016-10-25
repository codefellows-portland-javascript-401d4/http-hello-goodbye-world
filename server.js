const http = require('http'); 
const url = require('url');
const router = require('./router');


function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname; 
        console.log('Request for ' + pathname + ' received.'); 
 
        route(pathname, response);
    }
    
    const port = 8080;

    http.createServer(onRequest).listen(port);
    console.log('Server has started on port ', port );
}
exports.start = start;
