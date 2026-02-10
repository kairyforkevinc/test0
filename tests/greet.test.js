const { greet } = require('../src/greet');

describe('greet', () => {
  test('should return greeting with given name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  test('should handle different names', () => {
    expect(greet('Bob')).toBe('Hello, Bob!');
    expect(greet('Charlie')).toBe('Hello, Charlie!');
  });

  test('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });

  test('should handle names with spaces', () => {
    expect(greet('John Doe')).toBe('Hello, John Doe!');
  });
});
