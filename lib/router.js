var handler = require('./requestHandlers');

function route(handle, href, pathname, response, query) {
  console.log('About to route a request for ' + pathname);
  if(typeof(handle[pathname]) === 'function') {
    handle[pathname](response, query);
  } else {
    console.log('Router query:' + query);
    handler.fourohfour(href, response, query);
  }
};

exports.route = route;