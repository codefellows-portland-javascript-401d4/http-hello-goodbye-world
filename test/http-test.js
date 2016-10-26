const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const server = require('../lib/http');

describe('simple http server', () => {


    let request = chai.request(server);
    
    // it('sends back json response', done => {
    //     request
    //         .get('/')
    //         .end((err, res) => {
    //             if (err) return done(err);
    //             assert.deepEqual(res.body, { name: 'foo' });
    //             done();
    //         });
    // });

    it('sends back text with format=text in query string', done => {
        request
            .get('/?format=text')
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.type, 'text/plain');
                assert.equal(res.text, `{"name":"foo"}`);
                done();
            });
    });
});