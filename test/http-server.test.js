const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;
const assert = require('chai').assert;
const server = require('../lib/http-server');
const port = 8080;

describe('server', () => {
    before(done => {
        server.listen(port, done);
    });
});

describe('test http server', () => {
    let request = chai.request(server);

    it('sends back a response text', done => {
        request
            .get('/test1')
            .end((err, response) => {
                if(err) return done(err);
                assert.deepEqual(response.text, 'testing...testing is in progress');
                done();
            });
        });

        it('sends back response text and the includes the requested Url', done => {
            request
                .get('/test2')
                .end((err, response) => {
                    if(err) return done (err);
                    assert.deepEqual(response.text, 'the requested url is as follows: http://localhost:8080/test2 the response text is: let the testing commence');
                    done();
                });
            });

        it('204_no content', done => {
            request
                .get('/status204')
                .end((err, response) => {
                    if(err) return done(err);
                    expect(response).to.have.status(204);
                    done();
                });
        });

        it('query - ?happy=halloween', done => {
            request
                .get('/?happy=halloween')
                .end((err, response) => {
                    if(err) return done(err);
                    expect(response).to.have.status(200);
                    assert.deepEqual(response.text, 'Happy Halloween!');
                    done();
                });
            });
    });