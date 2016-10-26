var reqHandlers = require('../lib/requestHandlers');

describe('Tests TBA', () => {
  it('does all that and then some!', () => {
    reqHandlers.hello();
    assert.equal((1+1), 2);
  });
});