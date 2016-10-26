const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const httpserver = require('../http_server');



describe('http-server', () => {

  let server = chai.request(httpserver);

  it('hits the root and something happens', done => {
    server
      .get('/')
      .end(function(err, res){
        if (err) return done(err);
        assert.equal(res.status, 200);
        done();
      })
  });


});

