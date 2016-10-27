const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const figlet = require('figlet');
const assert = chai.assert;
const server = require('../lib/server');

describe('The http server', () => {
  it('responds to an invalid GET request', done => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        if(err) return done(err);
        console.log('in test ', res.text);
        assert.equal(res.text, figlet.textSync('Hello World!', {
          font: 'hollywood',
          horizontalLayout: 'default',
          verticalLayout: 'default'
        }));
        done();
      });
  });
});
