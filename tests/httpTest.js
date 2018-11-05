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
            .get('/users')
            .end((err, res) => {
                if (err) return done(err);
                assert.deepEqual(res.body, [{ name: 'foo' }, { name: 'bar'}, { name: 'qux'}]);
                assert.equal(res.res.statusMessage, 'good to go!');
                done();
            });
    });

    it('sends back json object with name property of bar', done => {
        request
            .get('/users/bar')
            .end((err, res) => {
                if (err) return done(err);
                assert.deepEqual(res.body, { name: 'bar'});
                assert.equal(res.res.statusMessage, 'good to go!');
                done();
            });
    });

    it('sends back error if you request for a user that doesn\'t exist', done => {
        request
            .get('/users/doko')
            .end((err, res) => {
                assert.equal(err.status, 400);
                assert.equal(res.res.statusMessage, 'no such user!');
                done();
            });
    });

    it('checks get handler paths are working', done => {
        request
            .get('/admin')
            .end((err, res) => {
                done();
            });
    });

    it('sends back text with format=text in query string', done => {
        request
            .get('/users?format=text')
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.type, 'text/plain');
                assert.equal(res.text, JSON.stringify([{ name: 'foo' }, { name: 'bar'}, { name: 'qux'}]));
                done();
            });
    });

    it('posts new data to the database that is not valid json', done => {
        request
            .post('/users')
            .set('Content-Type', 'text/plain')
            .send('THEhmHNHSIHGGHGFHFNFIHOHJAHA:AH::AHH";gfd;gjfdg;sjJSIHJHISNHINHJSIDHNAHNIH')
            .end((err, res) => {
                assert.equal(err.response.res.text, 'not valid JSON data');
                done();
            });
    });

    it('posts new data to the database that is valid json', done => {
        request
            .post('/users')
            .set('Content-Type', 'application/json')
            .send(JSON.stringify({name: 'doko'}))
            .end((err, res) => {
                assert.equal(res.res.statusMessage, 'post accepted');
                done();
            });
    });

    it('tests that the new user has been added by calling all users down', done => {
        request
            .get('/users')
            .end((err, res) => {
                if (err) return done(err);
                assert.deepEqual(res.body, [{ name: 'foo' }, { name: 'bar'}, { name: 'qux'}, { name: 'doko'}]);
                assert.equal(res.res.statusMessage, 'good to go!');
                done();
            });
    });

    it('tests to see whether a data can be deleted based on file path and see whether file was truly deleted from returned data', done => {
        request
            .del('/users/foo')
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.res.statusMessage, 'request complete, deletion performed!');
                assert.deepEqual(res.body, [{ name: 'bar'}, { name: 'qux'}, { name: 'doko'}]);
                done();
            });
    });

    after(done => {
        server.close(done);
    });
});