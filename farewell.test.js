const { farewell } = require('./farewell');

describe('farewell', () => {
  test('should return farewell message with provided name', () => {
    expect(farewell('Alice')).toBe('Goodbye, Alice!');
  });

  test('should return farewell message with different name', () => {
    expect(farewell('Bob')).toBe('Goodbye, Bob!');
  });

  test('should handle empty string', () => {
    expect(farewell('')).toBe('Goodbye, !');
  });

  test('should handle special characters in name', () => {
    expect(farewell('Jean-Pierre')).toBe('Goodbye, Jean-Pierre!');
  });
});
