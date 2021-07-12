import getBiggestCup from './getBiggestCup';

describe('Get Biggest Cup', () => {
  it('should return undefined if no cups', () => {
    expect(getBiggestCup([0, 0, 0, 0])).toBe(undefined);
    expect(getBiggestCup([])).toBe(undefined);
    expect(getBiggestCup()).toBe(undefined);
  });
  it('should return right size', () => {
    expect(getBiggestCup([1, 1, 1, 1])).toBe(3);
    expect(getBiggestCup([1, 1, 1, 0])).toBe(2);
    expect(getBiggestCup([1, 1, 0, 0])).toBe(1);
    expect(getBiggestCup([1, 0, 0, 0])).toBe(0);
    expect(getBiggestCup([0, 1, 0, 0])).toBe(1);
    expect(getBiggestCup([0, 0, 1, 0])).toBe(2);
    expect(getBiggestCup([0, 0, 0, 1])).toBe(3);
  });
});
