const farewell = require('../src/farewell');

describe('farewell', () => {
  test('should return farewell with name', () => {
    expect(farewell('World')).toBe('Goodbye, World!');
  });

  test('should handle single letter names', () => {
    expect(farewell('A')).toBe('Goodbye, A!');
  });

  test('should handle names with spaces', () => {
    expect(farewell('John Doe')).toBe('Goodbye, John Doe!');
  });

  test('should handle empty string', () => {
    expect(farewell('')).toBe('Goodbye, !');
  });

  test('should handle special characters', () => {
    expect(farewell('José')).toBe('Goodbye, José!');
  });
});
