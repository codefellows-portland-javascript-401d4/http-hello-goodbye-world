const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const exec = require('child_process').exec;
const open = require('open');
const figlet = require('figlet');
const server = require('../lib/httpServer');

describe('http server module battery tests', done => {
    
    let request = chai.request(server);
    const port = 8080;
    
    before(done => {
        server.listen({port: port}, done);
    });

    // deprecated test for passing initial .travis.yml requirements
    // it('asserts that command works', done => {
    //     var child = exec('node server.js');
    //     open('http://localhost:3000/');
    //     child.stdout.on('data', function(data) {
    //         assert.equal(data,'http server listening on port 3000\n');
    //         setTimeout(done, 15000);
    //         done();
    //     });
    // });

    it('console logs something', () => {
        console.log('something');
    });

    it('sends back all json data', done => {
        request
            .get('/users?id=all')
            .end((err, res) => {
                if (err) return done(err);
                assert.deepEqual(res.body, [{ name: 'foo' }, { name: 'bar'}, { name: 'qux'}]);
                assert.equal(res.res.statusMessage, 'good to go!');
                done();
            });
    });

    it('sends back json object with name property of bar', done => {
        request
            .get('/users?id=bar')
            .end((err, res) => {
                if (err) return done(err);
                assert.deepEqual(res.body, { name: 'bar'});
                assert.equal(res.res.statusMessage, 'good to go!');
                done();
            });
    });

    it('sends back error if you request for a user that doesn\'t exist', done => {
        request
            .get('/users?id=doko')
            .end((err, res) => {
                assert.equal(err.status, 400);
                assert.equal(res.res.statusMessage, 'no such user!');
                done();
            });
    });

    // it('sends back text with format=text in query string', done => {
    //     request
    //         .get('/?format=text')
    //         .end((err, res) => {
    //             if (err) return done(err);
    //             assert.equal(res.type, 'text/plain');
    //             assert.equal(res.text, JSON.stringify({name:'foo'}));
    //             done();
    //         });
    // });

    after(done => {
        server.close(done);
    });
});