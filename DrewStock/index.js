const server = require('./lib/hello_goodbye');

const port = 5000;

server.listen(port, err => {
    if(err) console.log('ERROR!', err);
    else console.log('http server listening on port', port);
});
