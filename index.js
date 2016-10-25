var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/hello'] = requestHandlers.start;
handle['/goodbye'] = requestHandlers.upload;

server.start(router.route, handle); //Is this the dependency-injection part?