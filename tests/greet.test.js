const greet = require('../src/greet');

describe('greet', () => {
  test('should return greeting with name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  test('should handle single letter names', () => {
    expect(greet('A')).toBe('Hello, A!');
  });

  test('should handle names with spaces', () => {
    expect(greet('John Doe')).toBe('Hello, John Doe!');
  });

  test('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });

  test('should handle special characters', () => {
    expect(greet('José')).toBe('Hello, José!');
  });
});
