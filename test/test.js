var server = require('../server.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var assert = chai.assert;

describe('server.js', done => {

    var request = chai.request(server);

    it('returns 404 if path is a meat food', () => {
        request
        .get('/beef')
        .end((err, res) => {
            if (err) return done(err);
            assert.equal(res.status, 404);
            done();
        });
    });

    it('returns sentence with properties if given a query string.', () => {
        request
        .get('/?emotion=happy&&size=big%%')
        .end(err,res) => {
            if (err) return done(err);
            assert.include(res.text, 'happy');
            assert.include(res.text, 'big');
        }
    })


});