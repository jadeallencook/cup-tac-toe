/*
  creates a new player object
*/

const createPlayer = (name, color) => {
  return {
    name,
    color,
    cups: [4, 3, 2, 1],
  };
};

export default createPlayer;
