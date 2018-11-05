const server = require('./http-server');
const port = process.env.PORT || 8080;

module.exports = server.listen(port, () => {
  console.log('server listening on port',
  server.address().port);
});
