/*
  gets y/x corrdinates by index
  1 => [0, 1]
  4 => [1, 1]
*/

const getCoordinates = (index) =>
  (index >= 0) & (index <= 8) ? [Math.floor(index / 3), index % 3] : undefined;

export default getCoordinates;
