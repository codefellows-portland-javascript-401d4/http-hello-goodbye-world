const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const server = require('../lib/hello-server');

describe('Test output for page routing in hello-goodbye app', (req, res) => {

  const request = chai.request(server);

  it('logs out response', (done) => {
    request
      .get('/hello')
      .then(() => {
        console.log('res: ', res);
        assert.deepEqual(res.text, 'foo');
      })
      .catch(done);
  });
  
});