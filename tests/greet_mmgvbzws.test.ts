import { greet_mmgvbzws } from '../src/greet_mmgvbzws';

describe('greet_mmgvbzws', () => {
  it('should return a greeting with the provided name', () => {
    expect(greet_mmgvbzws('Alice')).toBe('Hello, Alice!');
  });

  it('should handle empty string', () => {
    expect(greet_mmgvbzws('')).toBe('Hello, !');
  });

  it('should handle name with spaces', () => {
    expect(greet_mmgvbzws('John Doe')).toBe('Hello, John Doe!');
  });
});
