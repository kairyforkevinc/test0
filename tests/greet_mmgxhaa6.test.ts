import { greet_mmgxhaa6 } from '../src/greet_mmgxhaa6';

describe('greet_mmgxhaa6', () => {
  it('should return a greeting with the provided name', () => {
    expect(greet_mmgxhaa6('Alice')).toBe('Hello, Alice!');
  });

  it('should throw for empty string', () => {
    expect(() => greet_mmgxhaa6('')).toThrow('Name cannot be empty');
  });

  it('should throw for whitespace-only string', () => {
    expect(() => greet_mmgxhaa6('   ')).toThrow('Name cannot be empty');
  });

  it('should handle name with spaces', () => {
    expect(greet_mmgxhaa6('John Doe')).toBe('Hello, John Doe!');
  });

  it('should throw for null', () => {
    expect(() => greet_mmgxhaa6(null)).toThrow('Name cannot be empty');
  });

  it('should throw for undefined', () => {
    expect(() => greet_mmgxhaa6(undefined)).toThrow('Name cannot be empty');
  });
});
