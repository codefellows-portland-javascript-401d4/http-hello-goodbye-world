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

  // it('sends back ')

});