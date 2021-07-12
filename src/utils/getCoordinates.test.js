import getCoordinates from './getCoordinates';

describe('Get Coordinates', () => {
  it('should return undefined if no params', () => {
    expect(getCoordinates()).toBe(undefined);
  });
  it('should return undefined if negative index', () => {
    expect(getCoordinates(-1)).toBe(undefined);
    expect(getCoordinates(-5)).toBe(undefined);
    expect(getCoordinates(-10)).toBe(undefined);
  });
  it('should return undefined if index if over 8', () => {
    expect(getCoordinates(9)).toBe(undefined);
    expect(getCoordinates(10)).toBe(undefined);
    expect(getCoordinates(15)).toBe(undefined);
  });
  it('should return coordinates for correct indexes', () => {
    expect(getCoordinates(0)).toStrictEqual([0, 0]);
    expect(getCoordinates(1)).toStrictEqual([0, 1]);
    expect(getCoordinates(2)).toStrictEqual([0, 2]);
    expect(getCoordinates(3)).toStrictEqual([1, 0]);
    expect(getCoordinates(4)).toStrictEqual([1, 1]);
    expect(getCoordinates(5)).toStrictEqual([1, 2]);
    expect(getCoordinates(6)).toStrictEqual([2, 0]);
    expect(getCoordinates(7)).toStrictEqual([2, 1]);
    expect(getCoordinates(8)).toStrictEqual([2, 2]);
  });
});
