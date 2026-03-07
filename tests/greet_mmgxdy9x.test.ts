import { greet_mmgxdy9x } from '../src/greet_mmgxdy9x';

describe('greet_mmgxdy9x', () => {
  it('should return a greeting with the provided name', () => {
    expect(greet_mmgxdy9x('Alice')).toBe('Hello, Alice!');
  });

  it('should handle name with spaces', () => {
    expect(greet_mmgxdy9x('John Doe')).toBe('Hello, John Doe!');
  });

  it('should throw for empty string', () => {
    expect(() => greet_mmgxdy9x('')).toThrow('Name cannot be empty');
  });

  it('should throw for whitespace-only string', () => {
    expect(() => greet_mmgxdy9x('   ')).toThrow('Name cannot be empty');
  });
});
