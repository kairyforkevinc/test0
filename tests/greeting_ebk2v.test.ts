import { greet_ebk2v } from '../src/greeting_ebk2v';

describe('greet_ebk2v', () => {
  it('should return a greeting with the provided name', () => {
    expect(greet_ebk2v('Alice')).toBe('Hello, Alice!');
  });

  it('should handle empty string', () => {
    expect(greet_ebk2v('')).toBe('Hello, !');
  });

  it('should handle name with spaces', () => {
    expect(greet_ebk2v('John Doe')).toBe('Hello, John Doe!');
  });
});
