import { calculate_40kin } from '../src/math_40kin';

describe('calculate_40kin', () => {
  it('should return the sum of two positive numbers', () => {
    const result = calculate_40kin(10, 20);
    expect(result).toBe(30);
  });

  it('should return the sum of two negative numbers', () => {
    const result = calculate_40kin(-5, -10);
    expect(result).toBe(-15);
  });
});
