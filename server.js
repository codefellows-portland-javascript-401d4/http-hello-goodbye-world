const http = require('http'); 
var router = require("./router");
// const indexHtml = fs.createReadStream('index.html');
const url = require('url');


function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname; 
        console.log('Request for ' + pathname + ' received.'); 

        route(pathname);

        response.writeHead(200, {'Content-Type': 'text/plain'}); 
        response.write('Hello World');
        response.end();
    }
    
    const port = 8080;

    http.createServer(onRequest).listen(port);
    console.log('Server has started on port ', port );
}
exports.start = start;
