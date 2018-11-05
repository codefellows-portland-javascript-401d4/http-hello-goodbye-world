const httpServer = require('./lib/httpServer');
const port = process.env.PORT || 8080;

httpServer.listen(port, err => {
    if (err) console.log('ERROR!', err);
    else console.log('http server listening on port', httpServer.address().port);
});