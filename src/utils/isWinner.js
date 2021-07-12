/*
  checks board to see if there is a winner
  (board) => true/false
*/

const isWinner = (board) => {
  for (let num of [0, 1, 2]) {
    if (
      (board[0][num].player !== undefined &&
        board[0][num].player === board[1][num].player &&
        board[1][num].player === board[2][num].player) ||
      (board[num][0].player !== undefined &&
        board[num][0].player === board[num][1].player &&
        board[num][1].player === board[num][2].player)
    ) {
      return true;
    }
  }
  if (
    (board[0][0].player !== undefined &&
      board[0][0].player === board[1][1].player &&
      board[1][1].player === board[2][2].player) ||
    (board[0][2].player !== undefined &&
      board[0][2].player === board[1][1].player &&
      board[1][1].player === board[2][0].player)
  ) {
    return true;
  }
  return false;
};

export default isWinner;
