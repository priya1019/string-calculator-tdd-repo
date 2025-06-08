import { add } from './stringCalculator';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });
  it('returns the number itself for single number input', () => {
    expect(add('5')).toBe(5);
  });
  it('returns sum of two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
  });
  it('returns sum of multiple comma-separated numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
  });
});
