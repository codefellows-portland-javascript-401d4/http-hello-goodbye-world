const http = require("http");
const port = 8000;

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
	if (request.url === '/') {
  	response.write("Hello World");
	} else {
		response.write("Goodbye World (or less hyperbolically, goodbye to the root directory)");
	}
  response.end();
}).listen(port, err => {
    if(err) console.log('Error in setting up port!', err);
    else console.log('http server listening on port', port);
});

