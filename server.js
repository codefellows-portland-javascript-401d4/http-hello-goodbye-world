const http = require('http');
const url = require('url');
const fs = require('fs');
const index = fs.createReadStream('index.html');

function startItUp(route) {
  function onReq(req, res) {
    // var pathname = url.parse(req.url).pathname;
    // route(pathname);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(req.url + ' world');
    res.end;
  }
  let port = 8888;
  http.createServer(onReq).listen(port);
  console.log('serving on ' + port);
}

exports.startItUp = startItUp;
