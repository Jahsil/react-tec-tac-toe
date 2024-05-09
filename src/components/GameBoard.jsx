

export default function GameBoard({ handlePlayersSwitch, board }) {
  // const [gameBoard , setGameBoard] = useState(initalGameBoard)

  // function handleButton(rowIndex , colIndex){

  //     setGameBoard((prevGameBoard) => {
  //         const gameBoardCopy = [...prevGameBoard.map(row => [...row])]
  //         gameBoardCopy[rowIndex][colIndex] = activePlayer
  //         return gameBoardCopy
  //     })
  //     handlePlayersSwitch()
  // }

 

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  value={col}
                  onClick={() => handlePlayersSwitch(rowIndex, colIndex)}
                  disabled={col !== null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
