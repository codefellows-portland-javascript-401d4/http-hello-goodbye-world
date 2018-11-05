const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const server = require('../lib/hello-server');

describe('Test output for page routing in hello-goodbye app', () => {

  const request = chai.request(server);
  
  it('Sampled figlet string matches test swatch - default route', (done) => {
    request
      .get('/')
      .then(res => {
        let resText = res.text;
        console.log('resText.substr(184, 1): ', resText.substr(184, 1));
        assert.equal(resText.substr(184, 1), '8');
        done();
      })
      .catch(done);
  });
  
  it('Sampled figlet string matches test swatch - font-selection', (done) => {
    request
      .get('/goodbye?Broadway')
      .then(res => {
        let resText = res.text;
        console.log('resText.substr(484, 1): ', resText.substr(484, 1));
        assert.equal(resText.substr(484, 1), '8');
        done();
      })
      .catch(done);
  });
  
  it('Sampled figlet string matches test swatch - error-handling', (done) => {
    request
      .get('/aloha')
      .then(res => {
        let resText = res.text;
        console.log('resText.substr(684, 1): ', resText.substr(684, 1));
        assert.equal(resText.substr(684, 1), '|');
        done();
      })
      .catch(done);
  });
  
});