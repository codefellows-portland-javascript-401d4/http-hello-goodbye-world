var server = require('./server');

server.listen(3000, err => {
    if (err) {console.log('error: ', err);}
    else {console.log('server listening on port: ', 3000);}
});