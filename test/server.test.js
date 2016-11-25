const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const server = require('../lib/server');
const message = require('../lib/message');

describe('The http server', () => {
  const request = chai.request(server);
  it('responds coreectly to a GET request on "/"', done => {
    request
      .get('/')
      .end((err, res) => {
        if(err) return done(err);
        assert.equal(res.text, message.makeFiglet('Hello World!'));
        done();
      });
  });

  it('responds correctly to a GET request on "/goodbye"', done => {
    request
      .get('/goodbye')
      .end((err, res) => {
        if(err) return done(err);
        assert.equal(res.text, message.makeFiglet('Goodbye World', 'Ghost'));
        done();
      });
  });

  it('responds correctly to a valid query string', done => {
    request
      .get('/cats/?id=2')
      .end((err, res) => {
        if(err) return done(err);
        assert.equal(res.text, 'thomas the cat is 9 years old!');
        done();
      });
  });

  it('responds correctly to an invalid query string', done => {
    request
      .get('/cats/?id=999')
      .end((err, res) => {
        if(err) return done(err);
        assert.equal(res.text, 'sorry no cats match your search');
        done();
      });
  });

  it('responds correctly to a post request', done => {
    request
    .post('/post')
    .end((err, res) => {
      if(err) return done(err);
      assert.equal(res.text, message.makeFiglet('Thank you for posting!'));
      done();
    });
  });

  it('responds correctly to bad path request', done => {
    request
      .get('/badpath')
      .end((err, res) => {
        if(err) {
          assert.equal(res.statusCode, 404);
          return done();
        }
        console.log('Something is wrong, this path should throw and error');
        assert.isOk(err);
        done();
      });
  });
});
