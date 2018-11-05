const assert = require('chai').assert;
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../index.js');


describe('Our server responds to different kinds of requests', () => {
  let request = chai.request('http://localhost:8080');
  it('should display our homepage when someone requests /', done => {
    request
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        assert.isOk(res.text.match(/\bHello World!/));
        done();
      });
  });

  it('should show an error page if the user requests a url that doesn\'t exist. And show the path they used', done => {

    request
      .get('/dogs')
      .end((err, res) => {
        if (err) {
          assert.equal(res.text, 'You have requested: /dogs (BUT WE DIDN\'T WRITE THAT PAGE, SORRY)')
          assert.equal(res.statusCode, 404);
          done();
        }
        
      });
  });

  it('should return a json object when /bacon is called with a POST request', done => {
    request
      .post('/bacon')
      .query({msg: 'so much bacon'})
      .end((err, res) => {
        if (err) return done(err);
        assert.equal(res.text, '{"msg":"so much bacon"}');
        done();
      });
  });


});