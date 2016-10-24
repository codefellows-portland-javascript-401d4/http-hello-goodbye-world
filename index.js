const server = require('./server');
const router = require('./router');
const requests = require('./requests');

var handle = {};
handle['/'] = requests.start;
handle['/start'] = requests.start;
handle['/hello'] = requests.hello;
handle['/goodbye'] = requests.goodbye;

server.start(router.route, handle);