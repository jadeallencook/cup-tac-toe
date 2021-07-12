/*
  TODO: move this to a hook
*/

import getCoordinates from './getCoordinates';

const computer = ({
  board,
  players,
  setBoard,
  setPlayers,
  setSelectedSize,
  setIsPlayersTurn,
  isPlayersTurn,
}) => {
  setTimeout(() => {
    let hasMoved = false;
    const boardArray = [...board[0], ...board[1], ...board[2]];
    // play winning move
    // play defense
    // play offense
    // take middle cell
    if (!hasMoved & (board[1][1].player === undefined)) {
      board[1][1] = {
        player: +!isPlayersTurn,
        size: 0,
      };
      hasMoved = true;
    }
    // play first available cell: last resort
    if (!hasMoved) {
      const [y, x] = getCoordinates(
        boardArray.reduce((acc, val, index) => {
          if (acc === undefined && val.player === undefined) {
            return index;
          }
          return acc;
        }, undefined)
      );
      board[y][x] = {
        player: +!isPlayersTurn,
        size: 0,
      };
      hasMoved = true;
    }
    // set states
    setBoard(board);
    setPlayers(players);
    setSelectedSize(0);
    setIsPlayersTurn(!isPlayersTurn);
  }, 1000);
};

export default computer;
