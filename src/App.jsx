import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./wining_combos.js";
import GameOver from "./components/GameOver.jsx";
import { useState } from "react";

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0]["player"] === "X") {
    currPlayer = "O";
  }
  return currPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  let activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initalGameBoard.map((item) => [...item])];
  gameTurns.forEach((element) => {
    gameBoard[element.square["row"]][element.square["col"]] = element.player;
  });

  let winner = null;
  for (const combo of WINNING_COMBINATIONS) {
    let firstBox = gameBoard[combo[0].row][combo[0].column];
    let secondBox = gameBoard[combo[1].row][combo[1].column];
    let thirdBox = gameBoard[combo[2].row][combo[2].column];
    if (firstBox && firstBox === secondBox && firstBox === thirdBox) {
      winner = players[firstBox];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handlePlayersSwitch(rowIndex, colIndex) {
    // setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));

    setGameTurns((prevGame) => {
      const currPlayer = deriveActivePlayer(prevGame);
      let updatedGame = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevGame,
      ];
      return updatedGame;
    });
  }

  function handleReMatch() {
    setGameTurns([]);
  }

  function handleActivePlayers(symbol, name) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: name,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handleActivePlayers}
          ></Player>
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handleActivePlayers}
          ></Player>
        </ol>

        {(winner || hasDraw) && (
          <GameOver handleReMatch={handleReMatch} winner={winner} />
        )}
        <GameBoard
          handlePlayersSwitch={handlePlayersSwitch}
          board={gameBoard}
        ></GameBoard>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
