const server = require('./httpServer');
const port = process.env.PORT || 8080;

module.exports = server.listen(port, () => {
    console.log('server listening on port ' + server.address().port);
});