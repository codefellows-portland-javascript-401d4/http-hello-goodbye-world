const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const server = require('../lib/http.js');

describe('my http server:', () => {
  let request = chai.request(server);

  it('sends status code 400 for bad requests and checks for correct response', done => {
    request.get('/notapath')
      .end((err, res) => {
        assert.ok(err);
        assert.equal(res.statusCode, 400);
        //looks for these string of words exists in res.text
        //if it does, it will return truthy
        //asert.isOk checks for truthy
        assert.isOk(/bad url request/.test(res.text));
        done();
      });
  });
  it('responds to post requests', done => {
    request.post('/')
      .end((err, res) => {
        if(err) return done(err);
        assert.equal(res.text, 'the request method was a "POST"');
        done();
      });
  });
  it('writes correct statement for /goodbye (path)', done => {
    request.get('/goodbye')
      .end((err,res) => {
        if(err) return done(err);
        assert.equal(res.statusCode, 200);
        assert.equal(res.header['content-type'], 'text/html');
        assert.equal(res.text, 'this is the goodbye page');
        done();
      });
  });
  it('writes correct response to correct query path', done => {
    request.get('/blah?blah=4')
      .end((err,res) => {
        if(err) return done(err);
        assert.equal(res.statusCode, 200);
        assert.equal(res.header['content-type'], 'application/json');
        assert.equal(res.text, '{"blah":"4"}');
        done();
      });
  });
});
