import { useState } from "react"

export default function Player({initialName , symbol, isActive}) {
    const [isEditing , setIsEditing] = useState(false)
    const [playerName , setPlayerName] = useState(initialName)

    function handleEdit(){
        console.log(isEditing)
        setIsEditing((editing) => !editing)
        
    }
    function handlePlayerName(event){
        setPlayerName(event.target.value)
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>
    if(isEditing){
        editablePlayerName = <input type="text" value={playerName} onChange={handlePlayerName} />
    }

    return (
       
        <li className={isActive ? "active" : ""}>
            <span className="player">

            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleEdit()}>{isEditing ? "Save" : "Edit"}</button>

          </li>
        
    )
}