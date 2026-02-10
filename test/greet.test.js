const assert = require('assert');
const greet = require('../src/greet');

describe('greet', () => {
  it('should return a greeting message with the provided name', () => {
    const result = greet('Alice');
    assert.strictEqual(result, 'Hello, Alice!');
  });

  it('should work with different names', () => {
    assert.strictEqual(greet('Bob'), 'Hello, Bob!');
    assert.strictEqual(greet('Charlie'), 'Hello, Charlie!');
  });

  it('should handle empty string', () => {
    const result = greet('');
    assert.strictEqual(result, 'Hello, !');
  });
});
