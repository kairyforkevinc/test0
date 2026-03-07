import { add_nuogg } from '../src/add_nuogg';

describe('add_nuogg', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add_nuogg(5, 7)).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(add_nuogg(-3, 8)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(add_nuogg(0, 10)).toBe(10);
    expect(add_nuogg(15, 0)).toBe(15);
  });
});
