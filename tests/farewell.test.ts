import { farewell } from '../src/farewell';

describe('farewell', () => {
  it('should return a farewell message with the provided name', () => {
    expect(farewell('World')).toBe('Goodbye, World!');
  });

  it('should handle different names correctly', () => {
    expect(farewell('Alice')).toBe('Goodbye, Alice!');
    expect(farewell('Bob')).toBe('Goodbye, Bob!');
  });

  it('should handle empty string', () => {
    expect(farewell('')).toBe('Goodbye, !');
  });

  it('should handle special characters', () => {
    expect(farewell('O\'Brien')).toBe("Goodbye, O'Brien!");
    expect(farewell('José')).toBe('Goodbye, José!');
  });
});
