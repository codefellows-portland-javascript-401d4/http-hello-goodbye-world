const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const server = require('../lib/hello-server');

describe('Test output for page routing in hello-goodbye app', () => {

  const request = chai.request(server);

  //Test fails properly and logs expected value.
  it('logs out response', (done) => {
    setTimeout(done, 10000);
    request
      .get('/')
      .then(res => {
        let resText = res.text;
        console.log('tested:\n', resText.substr(0, 188));
        assert.equal(resText.substr(184, 1), '9');
      })
      .catch(done);
  });
  
  //Test times out on match.
  it('logs out response', (done) => {
    setTimeout(done, 10000);
    request
      .get('/')
      .then(res => {
        let resText = res.text;
        console.log('tested:\n', resText.substr(0, 188));
        let tesText = '8';
        assert.equal(resText.substr(184, 1), '8');
      })
      .catch(done);
  });
  
});