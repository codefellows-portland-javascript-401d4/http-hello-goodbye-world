const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const server = require('../lib/server');

describe('server test', () => {
  var request = chai.request(server);
  var port = 8080;

  before(done => {
    server.listen({port: port}, done);
  });

  it('sends back JSON response', done => {
    request.get('/')
    .end((error, response) => {
      if (error) return done(error);
      assert.deepEqual(response.body, {name:'foo'});
      done();
    });
  });

  it('sends back get response', done => {
    request.get('/?hello=hello')
    .end((error, response) => {
      if (error) return done(error);
      assert.include(response.body, "request method \"get\"");
      done();
    });
  });

  after(done => {
    server.close(done);
  });
});