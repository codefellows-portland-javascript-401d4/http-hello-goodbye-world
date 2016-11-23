const http = require('http');
const url = require('url');
const fs = require('fs');

const router = require('./router');
const route = router.route;
const handle = router.handle;

const requestHandlers = require('./requestHandlers');


function onRequest(req, res) {

  const pathname = url.parse(req.url).pathname; 
  const href = url.parse(req.url).href;
  const query = url.parse(req.url).query;

  if(pathname === '/favicon.ico') {
    res.setHeader('content-type', 'image/x-icon');
    res.statusCode = 200;
    const favicon = fs.createReadStream('favicon.ico');
    favicon.pipe(res);
    return;
  }

  console.log('Server query: ' + query);
  console.log('Request for ' + pathname + ' received');
  console.log(req.method);

  if(req.method !== 'GET' && req.method !== 'HEAD') {
    res.write(`405 ${req.method} METHOD NOT ALLOWED`);
    res.end();
    return;
  }

  route(handle, href, pathname, res, query);
  
}

module.exports = http.createServer(onRequest);
