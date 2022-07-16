import { useState, useEffect } from 'react';
import './App.css';
import Player from './components/Player';
import isWinner from './utils/isWinner';
import createPlayer from './utils/createPlayer';
import isTie from './utils/isTie';
import computer from './utils/computer';
import getCoordinates from './utils/getCoordinates';
import PlayerWav from './assets/move.wav';
import WinnerWav from './assets/winner.wav';

const PlayerSfx = new Audio(PlayerWav);
const WinnerSfx = new Audio(WinnerWav);

function App() {
  const sizes = ['s', 'm', 'l', 'x'];
  const [isComputer] = useState(false);
  const [isPlayersTurn, setIsPlayersTurn] = useState(true);
  const [selectedSize, setSelectedSize] = useState(0);
  const [players, setPlayers] = useState([
    { ...createPlayer('Player 1', '#7A89C2') },
    { ...createPlayer(isComputer ? 'Computer' : 'Player 2', '#87B38D') },
  ]);
  const [player1, player2] = players;
  const [board, setBoard] = useState([
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, {}, {}],
  ]);
  const newGame = () => {
    setIsPlayersTurn(true);
    setPlayers([
      { ...createPlayer('Player 1', '#7A89C2') },
      { ...createPlayer(isComputer ? 'Computer' : 'Player 2', '#87B38D') },
    ]);
    setBoard([
      [{}, {}, {}],
      [{}, {}, {}],
      [{}, {}, {}],
    ]);
  };

  if (isWinner(board)) {
    WinnerSfx.play();
  }

  useEffect(() => {
    if (!isPlayersTurn & isComputer & !isWinner(board)) {
      computer({
        board: { ...board },
        players: [...players],
        setBoard,
        setPlayers,
        setSelectedSize,
        setIsPlayersTurn,
        isPlayersTurn,
      });
    }
  }, [isPlayersTurn]);

  return (
    <div id='App'>
      {isWinner(board) || isTie(board, players, +isPlayersTurn) ? null : (
        <div id='board' className='animate__animated  animate__flipInY'>
          {[...board[0], ...board[1], ...board[2]].map((cell, index) => {
            return (
              <div
                key={`cell-${index}`}
                onClick={() => {
                  const [y, x] = getCoordinates(index);
                  const numOfCups = players[+!isPlayersTurn].cups[selectedSize];
                  if (
                    (board[y][x].size === undefined ||
                      board[y][x].size < selectedSize) &&
                    numOfCups &&
                    !isWinner(board)
                  ) {
                    const tempBoard = { ...board };
                    const tempPlayers = [...players];
                    tempBoard[y][x] = {
                      player: +!isPlayersTurn,
                      size: selectedSize,
                    };
                    tempPlayers[+!isPlayersTurn].cups[selectedSize] =
                      numOfCups - 1;
                    setBoard(tempBoard);
                    setPlayers(tempPlayers);
                    setSelectedSize(0);
                    setIsPlayersTurn(!isPlayersTurn);
                    PlayerSfx.play();
                  }
                }}
              >
                {cell.size > -1 ? (
                  <div
                    style={{
                      backgroundColor:
                        cell.player !== undefined
                          ? cell.player === 0
                            ? players[0].color
                            : players[1].color
                          : '#FFF',
                    }}
                    className={`${
                      sizes[cell.size]
                    }-cell animate__animated animate__flipInX`}
                  ></div>
                ) : null}
              </div>
            );
          })}
        </div>
      )}
      {isWinner(board) || isTie(board, players, +isPlayersTurn) ? (
        <div id='winner'>
          <h2>
            {isWinner(board) ? `${players[+isPlayersTurn].name} Wins!` : 'TIE!'}
          </h2>
          <button onClick={newGame}>New Game</button>
        </div>
      ) : (
        <div id='players' className='animate__animated animate__flipInX'>
          <Player
            isPlayersTurn={isPlayersTurn}
            setSelectedSize={setSelectedSize}
            selectedSize={selectedSize}
            {...player1}
          />
          <Player
            isPlayersTurn={!isPlayersTurn}
            setSelectedSize={setSelectedSize}
            selectedSize={selectedSize}
            {...player2}
          />
        </div>
      )}
    </div>
  );
}

export default App;
