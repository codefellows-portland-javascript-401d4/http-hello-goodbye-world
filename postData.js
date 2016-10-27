var request = require('superagent');
var elements = require('./data/elements');
// var prefix = require('superagent-prefix')('/static');

var postData = function(){
    console.log('posting ', elements);
    request.post('http://localhost:8080')
        .write('{"name":"tj","pet":"tobi"}')
        .end();
};

module.exports = postData;