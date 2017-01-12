const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const assert = chai.assert;
const server = require('../lib/http-server');
const figlet = require('figlet');

describe ('http server', () => {
    let request = chai.request(server);

    it('returns 200 status code for successful requests', done => {
        request
            .get('/')
            .end((err, res) => {
                expect(res).status(200);
                done();
            });
    });

    it('responds to request made to path /hello', done => {
        request
            .get('/hello')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, figlet('hello, \nworld'));
                done();
            });
    });

    it('returns text response to query string request', done => {
        request
            .get('/?format=text')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.type, 'text');
                assert.equal(res.text, 'You requested: ?format=text');
                done();
            });
    });

    it('responds to request to /post url path && POST request', done => {
        request
            .post('/post/:hi')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'You added: /post/:hi');
                done();
            });
    });

    it('returns a 400 error code for invalid url request', done => {
        request
        .get('/not-valid')
        .end((error, response) => {
            expect(response).status(400);
            done();
        });
    });
});
