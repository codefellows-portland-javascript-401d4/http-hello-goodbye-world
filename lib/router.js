var handler = require('./requestHandlers');


const handle = {};

handle['/'] = handler.hello;
handle['/hello'] = handler.hello;
handle['/goodbye'] = handler.goodbye;
handle['/shalom'] = handler.shalom;


function route(handle, href, pathname, res, query) {


  if(typeof(handle[pathname]) === 'function') {
    handle[pathname](res, query);
  } else {
    handler.fourohfour(href, res, query);
  }

};

exports.route = route;
exports.handle = handle;