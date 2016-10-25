var assert = require('chai').assert;
var exec = require('child_process').exec;
var open = require('open');
var figlet = require('figlet');

describe('basic http test', () => {
    it('asserts that command works', done => {
        var child = exec('node server.js');
        open('http://localhost:3000/');
        child.stdout.on('data', function(data) {
            assert.equal(data,'http server listening on port 3000\n');
            setTimeout(done, 15000);
            done();
        });
    });
});