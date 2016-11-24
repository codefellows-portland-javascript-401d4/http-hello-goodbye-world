const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const server = require('../lib/hello-server');

describe('Test output for page routing in hello-goodbye app', () => {

  const request = chai.request(server);
  
  it('TEST 2 - Sampled figlet string matches test swatch', (done) => {
    setTimeout(done, 1500);
    request
      .get('/')
      .then(res => {
        let resText = res.text;
        assert.equal(resText.substr(184, 1), '8');
        done();
      })
      .catch(done);
  });
  
});