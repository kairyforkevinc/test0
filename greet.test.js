const { greet } = require('./greet');

describe('greet', () => {
  test('should return greeting with provided name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  test('should return greeting with different name', () => {
    expect(greet('Bob')).toBe('Hello, Bob!');
  });

  test('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });

  test('should handle special characters in name', () => {
    expect(greet('Jean-Pierre')).toBe('Hello, Jean-Pierre!');
  });
});
