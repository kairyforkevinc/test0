import { greet_mmgwpwub } from '../src/greet_mmgwpwub';

describe('greet_mmgwpwub', () => {
  it('should return a greeting with the provided name', () => {
    expect(greet_mmgwpwub('Alice')).toBe('Hello, Alice!');
  });

  it('should handle name with spaces', () => {
    expect(greet_mmgwpwub('John Doe')).toBe('Hello, John Doe!');
  });

  it('should throw for empty string', () => {
    expect(() => greet_mmgwpwub('')).toThrow('Name cannot be empty');
  });

  it('should throw for whitespace-only string', () => {
    expect(() => greet_mmgwpwub('   ')).toThrow('Name cannot be empty');
  });
});
