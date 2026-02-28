import { add_fyizk } from '../src/add_fyizk';

describe('add_fyizk', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add_fyizk(5, 7)).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(add_fyizk(-3, 8)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(add_fyizk(0, 10)).toBe(10);
    expect(add_fyizk(15, 0)).toBe(15);
  });
});
