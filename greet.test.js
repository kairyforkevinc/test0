const { greet } = require('./greet');

describe('greet', () => {
  test('returns greeting with name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  test('returns greeting with different name', () => {
    expect(greet('Bob')).toBe('Hello, Bob!');
  });

  test('handles empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});
