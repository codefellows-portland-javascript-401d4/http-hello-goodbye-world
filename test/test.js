const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const server = require('../lib/http-server');

describe('server test', () => {
  var request = chai.request(server);

  it('sends back JSON response', done => {
    request.get('/')
    .end((error, response) => {
      if (error) return done(error);
      assert.deepEqual(res.body, {name:'foo'});
      done();
    });
  });

  it('sends back text with format=text in query string', done => {
    request.get('/?format=text')
    .end((error, response) => {
      if (error) return done(error);
      assert.equal(response.type, 'text/plain');
      assert.equal(response.text, `{"name":"foo"}`);
    });
  });
});