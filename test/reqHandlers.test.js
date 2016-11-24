const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const server = require('../lib/hello-server');

describe('Test output for page routing in hello-goodbye app', () => {

  const request = chai.request(server);

  //Test should fail with expected value of 8.
  it('Sampled figlet string matches test swatch', (done) => {
    setTimeout(done, 10000);
    request
      .get('/')
      .then(res => {
        let resText = res.text;
        console.log('TESTING; resText.substr(184, 1): ', resText.substr(184, 1));
        assert.equal(resText.substr(184, 1), '9');
      })
      .catch(done);
  });
  
  //Test times out on match.
  it('Sampled figlet string matches test swatch', (done) => {
    setTimeout(done, 10000);
    request
      .get('/')
      .then(res => {
        let resText = res.text;
        console.log('TESTING; resText.substr(184, 1): ', resText.substr(184, 1));
        assert.equal(resText.substr(184, 1), '8');
      })
      .catch(done);
  });
  
});