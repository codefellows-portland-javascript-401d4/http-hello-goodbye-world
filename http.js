const http = require("http");
const parseUrl = require('url').parse;
const qs = require('querystring');
const port = 8000;

http.createServer(function(req, res) {
	const url = parseUrl(req.url);
  const queryData = url.parse(req.url, true).query;
  res.writeHead(200, {"Content-Type": "text/plain"});
	if ( url.pathname === '/') {
  	res.write("You're at the root directory\n");
	} else {
		res.write("You're not at the root directory\n");
	}
   if (queryData.name) {
    // user told us their name in the GET request, ex: http://host:8000/?name=Tom
    res.write('Hello ' + queryData.name + '\n');
  } 

  res.end();
}).listen(port, err => {
    if(err) console.log('Error in setting up port!', err);
    else console.log('http server listening on port', port);
});


// var server = http.createServer(function (request, response) {
//   var queryData = url.parse(request.url, true).query;
//   response.writeHead(200, {"Content-Type": "text/plain"});

//   if (queryData.name) {
//     // user told us their name in the GET request, ex: http://host:8000/?name=Tom
//     response.end('Hello ' + queryData.name + '\n');

//   } else {
//     response.end("Hello World\n");
//   }
// });



// const http = require('http');
// const fs = require('fs');
// const parseUrl = require('url').parse;
// const qs = require('querystring');


// module.exports = http.createServer((req, res) => {
//     const url = parseUrl(req.url);
//     if( url.pathname === '/favicon.ico') {
//         res.setHeader('Content-Type', 'image/x-icon');
//         res.statusCode = 200;
//         const favicon = fs.createReadStream('favicon.ico');
//         favicon.pipe(res);
//         return;
//     }

//     console.log('requested resource:', req.method, url.pathname);

//     const query = qs.parse(url.query);
//     console.log('query as string', url.query);
//     console.log('query as object', query, query.foo);
    
//     // res.statusCode = 200;
//     // res.statusMessage = 'good to go';
//     const type = query.format === 'text' ? 'text/plain' : 'application/json';
//     res.setHeader('Content-Type', type);
//     res.end(JSON.stringify({ name: 'foo' }));
// });

// var server = http.createServer(function (request, response) {
//   var queryData = url.parse(request.url, true).query;
//   response.writeHead(200, {"Content-Type": "text/plain"});

//   if (queryData.name) {
//     // user told us their name in the GET request, ex: http://host:8000/?name=Tom
//     response.end('Hello ' + queryData.name + '\n');

//   } else {
//     response.end("Hello World\n");
//   }
// });






// Add _at least_ three new possible responses, triggered by one or more of the following:
// 	* Url (path)
// 	* Query parameters
// 	* Http Verb  Get, PUt
	
// (all three of above options need to be used at least _once_)
	
// * Add an invalid response that yields a `400` status code.

// * Your response also needs to include some information based on the original request (e.g. show the actual requested url)
	
// * You are free to use other response messages and variations as long as they are distinguishable. 
// Plain text or html is fine.

