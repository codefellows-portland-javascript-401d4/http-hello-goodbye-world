var server = require('./http_server');
var router = require('./router');


server.start(router.route);