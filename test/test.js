var server = require('../server.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var assert = chai.assert;

describe('server.js', () => {

    var request = chai.request(server);

    it('responds to POST request', done => {
        request
        .post('/')
        .send('{"id":"1234"}')
        .end((err, res) => {
            if (err) return done(err);
            assert.include(res.text, 'id : 1234');
            assert.include(res.text, 'received');
            done();
        });
    });

    it('handles query strings correctly', done => {
        request
            .get('/?diet=vegetarian&meat=false&cute=true')
            .end((err, res) => {
                if (err) return done(err);
                assert.include(res.text, 'I am vegetarian.');
                assert.include(res.text, 'I am not meat.');
                assert.include(res.text, 'I am cute.');
                done();
            });
    });

    it('includes path in text', done => {
        request
            .get('/grass')
            .end((err, res) => {
                if (err) return done(err);
                assert.include(res.text, 'I like to think about grass.');
                done();
            });
    });


    it('returns 404 if path is a meat food', (done) => {
        request
        .get('/beef')
        .end((err, res) => {
            chai.expect(res).status(404);
            done();
        });
    });


});