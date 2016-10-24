var server = require('./server');
var router = require('./router');

server.startItUp(router.route);