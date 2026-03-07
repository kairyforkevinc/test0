import { greet_mmgvbzws } from '../src/greet_mmgvbzws';

describe('greet_mmgvbzws', () => {
  it('should return a greeting with the provided name', () => {
    expect(greet_mmgvbzws('Alice')).toBe('Hello, Alice!');
  });

  it('should throw for empty string', () => {
    expect(() => greet_mmgvbzws('')).toThrow('Name cannot be empty');
  });

  it('should throw for whitespace-only string', () => {
    expect(() => greet_mmgvbzws('   ')).toThrow('Name cannot be empty');
  });

  it('should handle name with spaces', () => {
    expect(greet_mmgvbzws('John Doe')).toBe('Hello, John Doe!');
  });
});
