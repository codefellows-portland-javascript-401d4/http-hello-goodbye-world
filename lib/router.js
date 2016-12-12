const qs = require('querystring');
const handle = require('./handlers');

module.exports = function (url, request, response) {
  const query = qs.parse(url.query);
  const path = url.pathname;
  response.statusCode = 200;

  if(query.id) {
    return handle.query(query.id, request, response);
  } else if(path === '/post' & request.method === 'POST') {
    return handle.post(request, response);
  } else if(typeof handle[path] === 'function') {
    return handle[path](request, response);
  } else {
    response.statusCode = 404;
    return handle.error(request, response);
  }
};