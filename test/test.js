const server = require('../server');
const router = require('../router');
const assert = require('assert');

describe('diplaying different messages', function(){
    it('displays a hello message', function(done){
        server.start(router.route);
        console.log('test 1 going');
        assert(display = 'hello');
        done();
    });
});


