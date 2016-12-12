const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const figlet = require('../lib/figlet');
const assert = chai.assert;
chai.use(chaiHttp);

describe('the http server', () => {
  const request = chai.request(server);
  
  it('respnds to /', done => {
    request
      .get('/')
      .end((err, res) => {
        if(err) return err;
        assert.equal(res.text, figlet.makeFiglet('What\'s up!', 'Graffiti'));
        done();
      });
  });

  it('responds to /goodbye', done => {
    request 
      .get('/goodbye')
      .end((err, res) => {
        assert.equal(res.text, figlet.makeFiglet('See Ya!'));
        done();
      });
  });

  it('responds to query', done => {
    request 
      .get('/cats?id=2')
      .end((err, res) => {
        if(err) return err;
        assert.equal(res.text, figlet.makeFiglet(`Your cat's name is Ellie`, 'Dancing Font'));
        done();
      });
  });

  it('responds to bad query', done => {
    request
      .get('/cats?id=5')
      .end((err, res) => {
        if(err) return err;
        assert.equal(res.text, figlet.makeFiglet('No cats, Go Fish!'));
        done();
      });
  });

  it('responds to POST', done => {
    request
      .post('/post')
      .end((err, res) => {
        if(err) return err;
        assert.equal(res.text, figlet.makeFiglet('Thanks for a new Cat!'));
        done();
      });
  });
});