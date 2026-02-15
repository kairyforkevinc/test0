import { calculate_utxd8 } from '../src/math_utxd8';

describe('calculate_utxd8', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_utxd8(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_utxd8(-5, 10)).toBe(5);
  });
});
