var handler = require('./requestHandlers');

function route(handle, href, response) {
  console.log('About to route a request for ' + href);
  if(typeof(handle[href]) === 'function') {
    handle[href](response);
  } else {
    handler.fourohfour(href, response);
  }
};

exports.route = route;