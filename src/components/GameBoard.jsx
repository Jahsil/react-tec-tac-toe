import { useState } from "react"

const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ handlePlayersSwitch, activePlayer }){
    const [gameBoard , setGameBoard] = useState(initalGameBoard)

    function handleButton(rowIndex , colIndex){
        
        setGameBoard((prevGameBoard) => {
            const gameBoardCopy = [...prevGameBoard.map(row => [...row])]
            gameBoardCopy[rowIndex][colIndex] = activePlayer
            return gameBoardCopy
        })
        handlePlayersSwitch()
    }
    return (
        <ol id="game-board">
           
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => <li key={colIndex}>
                        <button value={col} onClick={() => handleButton(rowIndex , colIndex)}>{col}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}