const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = require('chai').assert;
const expect = require('chai').expect;
const server = require('../lib/hello_goodbye');
const port = 5000;


describe('server', () => {

    before(done => {
        server.listen(port, done);
    });
});

describe('test http server', () => {

    let request = chai.request(server);

    it('sends back response text', done => {
        request
          .get('/hello')
          .end((err, response) => {
              if(err) return done(err);
              assert.deepEqual(response.text, 'hello world');
              done();
          });
    });

    it('sends back response text, including requested URL', done => {
        request
          .get('/goodbye')
          .end((err, response) => {
              if(err) return done(err);
              assert.deepEqual(response.text, 'you requested http://localhost:5000/goodbye Your response text is: goodbye world');
              done();
          });
    });

    it('204 - no content', done => {
        request
          .get('/noContent')
          .end((err, response) => {
              if(err) return done(err);
              expect(response).to.have.status(204);
              done();
          });
    });

    it('query - ?foo=bar', done => {
        request
            .get('/?foo=bar')
            .end((err, response) => {
                if (err) return done(err);
                expect(response).to.have.status(200);
                assert.deepEqual(response.text, 'foo bar!');
                done();
            });
    });

    it('request using different HTTP verb', done => {
        request
          .delete('/')
          .end((err, response) => {
              if(err) return done(err);
              assert.deepEqual(response.text, 'data has been deleted');
              done();
          });
    });


});
