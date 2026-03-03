import { greet_ebk2v } from '../src/greeting_ebk2v';

describe('greet_ebk2v', () => {
  it('should return a greeting with the provided name', () => {
    expect(greet_ebk2v('World')).toBe('Hello, World!');
  });

  it('should handle different names', () => {
    expect(greet_ebk2v('Alice')).toBe('Hello, Alice!');
    expect(greet_ebk2v('Bob')).toBe('Hello, Bob!');
  });

  it('should handle empty string', () => {
    expect(greet_ebk2v('')).toBe('Hello, !');
  });
});
