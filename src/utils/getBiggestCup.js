/* 
  gets the biggest cup in cup array 
  [0, 1, 0, 1] => 3
  [0, 1, 0, 0] => 1
*/

const getBiggestCup = (cups) => {
  if (!cups) {
    return undefined;
  }
  for (let index = cups.length - 1; index >= 0; index--) {
    const num = cups[index];
    if (num) {
      return index;
    }
  }
  return undefined;
};

export default getBiggestCup;
