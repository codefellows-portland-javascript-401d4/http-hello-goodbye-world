/** Created by Gloria on 10/24/16. **/

const http = require('http');
const urlParser = require('url').parse;
const querystring = require('querystring');
const route = require('./router').route;
const query = require('./router').query;

function onRequest(request, response) {
  var url = urlParser(request.url);
  var pathname = url.pathname;
  var qs = querystring.parse(url.query);

  if (url.query) {
    console.log('Query for ', qs);
    query(qs, pathname, response)
  } else {
    console.log('Request for ' + pathname + ' received.');
    route(pathname, response);
  }
}

module.exports = http.createServer(onRequest);
