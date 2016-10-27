const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const server = require('../lib/http-server');
const fs = require('fs');
const index = fs.readFileSync('./index.html', 'utf8');
console.log('index content is:', index);

describe('My HTTP Server', () => {

  let request = chai.request(server.httpServer);

  it('serves up html page', done => {
    request
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        console.log('Response body:', res.text);
        assert.deepEqual(res.text, index);
        done();
      });
  });

  it('posts POST on page', done => {
    postObject = {name: "Nathan", hometown: "Lantana"};
    request
      .post('/')
      .send(postObject)
      .end((err, res) => {
        if (err) return done(err);
        assert.deepEqual(res.body, postObject);
        done();
      });
  });


});
