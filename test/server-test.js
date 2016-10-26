const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const server = require('../lib/server');

describe('http server', () => {

  let request = chai.request(server);

  it('sends back hello world for path /hello', done => {
    let pathString = 'hello';
    request
      .get('/' + pathString)
      .end((err, res) => {
        if (err) return done(err);
        assert.deepEqual(res.text, pathString + ' world');
        done();
      });
  });

  it('sends back text with format=text in query string', done => {
    request
      .get('/?format=text')
      .end((err, res) => {
        if (err) return done(err);
        assert.equal(res.type, 'text');
        assert.equal(res.text, 'You requested: ?format=text');
        done();
      });
  });

  it('sends a POST request', done => {
    request
    .post('/hello/:hi')
    .end((err, res) => {
      if (err) return done(err);
      assert.equal(res.text, 'You added a new resource: /hello/:hi');
      done();
    });
  });

});