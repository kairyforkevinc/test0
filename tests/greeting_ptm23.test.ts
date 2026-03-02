import { greet_ptm23 } from '../src/greeting_ptm23';

describe('greet_ptm23', () => {
  it('should return a greeting message with the provided name', () => {
    expect(greet_ptm23('World')).toBe('Hello, World!');
  });

  it('should handle different names correctly', () => {
    expect(greet_ptm23('Alice')).toBe('Hello, Alice!');
    expect(greet_ptm23('Bob')).toBe('Hello, Bob!');
  });

  it('should handle empty string', () => {
    expect(greet_ptm23('')).toBe('Hello, !');
  });
});
