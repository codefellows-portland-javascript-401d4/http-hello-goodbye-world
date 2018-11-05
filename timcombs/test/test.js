const httpServer = require('../lib/httpServer');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

describe('E2E testing http server functions', () => {

  it('returns a status code of 200 on successful requests', (done) => {
    chai.request(httpServer)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('sends response to request for specific path', (done) => {
    chai.request(httpServer)
      .get('/goodbye')
      .end((err, res) => {
        expect(res.text).to.be.equal('goodbye world, you asked for the path: /goodbye');
        done();
      });
  });

  it('sends response to request for specific path with query string', (done) => {
    chai.request(httpServer)
      .get('/hello?needs=time')
      .end((err, res) => {
        expect(res.text).to.contain('Hello, the time is:');
        done();
      });
  });

  it('fails when navigating to an unknown path', (done) => {
    chai.request(httpServer)
      .get('/nowhere')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.text).to.be.equal('404 not found');
        done();
      });
  });

  it('sends response back to POST request for path /french-dip', (done) => {
    chai.request(httpServer)
      .put('/french-dip')
      .end((err, res) => {
        expect(res);
        done();
      });  
  });

});