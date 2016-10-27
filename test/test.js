const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const server = require('../server');

describe('testing server.js', () =>{
  let request = chai.request(server); 

  it('should serve a patch request', done => {
    request.patch('/').end((err, res) =>{
      console.log('request.patch', request.patch);
      if (err) return done (err);
      console.log('request', res.text);
      assert.include(res.text, 'successful');
      done();
    });
  });
  it('should bring up the index page', done => {
    request.get('/').end((err, res) =>{
      if (err) return done (err);
      assert.include(res.text, 'Served from node http!');
      done();
    });
  });
  it('should serve a query string', done => {
    request.get('?jade=8').end((err, res) =>{
      if (err) return done (err);
      assert.include(res.text, 'type of stone' || 'fulfill your request');
      done();
    });
  });
});