const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const reqHandlers = require('../lib/requestHandlers');
const server = require('../lib/hello-server');

describe('Tests TBA', (req, res) => {

  const request = chai.request(server);

  it('does all that and then some!', (done) => {
    request
      .get('/')
      .then(res => {
        console.log(res);
      })
      .catch(done);
    done();
  });
});