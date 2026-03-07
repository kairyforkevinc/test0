import { greet_mmgmt0pb } from '../src/greet_mmgmt0pb';

describe('greet_mmgmt0pb', () => {
  it('should return a greeting with the provided name', () => {
    expect(greet_mmgmt0pb('Alice')).toBe('Hello, Alice!');
  });

  it('should handle empty string', () => {
    expect(greet_mmgmt0pb('')).toBe('Hello, !');
  });

  it('should handle name with spaces', () => {
    expect(greet_mmgmt0pb('John Doe')).toBe('Hello, John Doe!');
  });

  it('should throw for null input', () => {
    expect(() => greet_mmgmt0pb(null)).toThrow('Name cannot be null or undefined');
  });

  it('should throw for undefined input', () => {
    expect(() => greet_mmgmt0pb(undefined)).toThrow('Name cannot be null or undefined');
  });
});
