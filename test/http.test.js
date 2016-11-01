const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const server = require('../index');


describe('http server functionality', () => {
    let request = chai.request(server);

    it('writes query string to page', done => {
        request
            .get('/?foo=bar')
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.statusCode, 200);
                assert.equal(res.text, 'You queried foo=bar, JSON: {"foo":"bar"}');
                done();
            });
    });

    it('writes method to page', done => {
        request
            .post('/people') //can you post a non-existent path?
            .set('Content-Type', 'application/json')
            .send({people: 'immigrants', hailingFrom: 'different places'})
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.statusCode, 200);
                assert.equal(res.text, 'Your method was POST');
                done();
            });
    });

    it('writes html to page', done => {
        request
            .get('/')
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.statusCode, 200);
                // assert.equal(res.type, 'text/html; charset=utf8'); ---> how do I check the content of something that is piped?
                assert.include(res.text, 'You are welcome to our lovely server of HTML!');
                done();
            });
    });

    it('writes hello world to the page', done => {
        request
            .get('/hello')
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.statusCode, 200);
                assert.equal(res.text, 'Hello World (found at /hello)');
                done();
            });
    });

    it('writes goodbye world to the page', done => {
        request
            .get('/goodbye')
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.statusCode, 200);
                assert.equal(res.text, 'Goodbye World (found at /goodbye)');
                done();
            });
    });

    it('speaks the language of the birds', done => {
        request
            .get('/nevermore')
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.statusCode, 200);
                assert.equal(res.text, 'Quoth the raven at /nevermore.');
                done();
            });
    });

    it('returns correct error code and prints an error message for unknown paths', done => {
        request
            .get('/flugzeug')
            .end((err, res) => {
                assert.equal(res.statusCode, 400);
                assert.equal(res.text, 'Path /flugzeug does not exist.');
                done();
            });
    });
});