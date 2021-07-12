/*
  checks if current board is a tie
  (board, players, player) => true/false
*/

const isTie = (board, players, player) => {
  const biggest = players[player].cups.reduce((acc, num, index) => {
    if (num) {
      return index;
    }
    return acc;
  }, 0);
  for (let cell of [...board[0], ...board[1], ...board[2]]) {
    if (cell.size === undefined || biggest > cell.size) {
      return false;
    }
  }
  return true;
};

export default isTie;
