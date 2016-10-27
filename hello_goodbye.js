var http = require('http');
var url = require('url');

const port = 5000;

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    if( url.parse(request.url).pathname == '/hello' ) {
        response.write('hello world');
    } else if (url.parse(request.url).pathname == '/goodbye' ) {
        response.write('goodbye world');
    }

    response.end();
}).listen(port, err => {
    if(err) console.log('ERROR!', err);
    else console.log('http server listening on port', port);
});
