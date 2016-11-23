var handler = require('./requestHandlers');


const handle = {};
handle['/'] = handler.hello;
handle['/hello'] = handler.hello;
handle['/goodbye'] = handler.goodbye;
handle['/shalom'] = handler.shalom;


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
exports.handle = handle;