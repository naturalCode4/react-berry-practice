import React, {useState} from "react";

export function AddBerry({berries, setBerries}) {

    const [newBerryInput, setNewBerryInput] = useState('')
    const [berryAlreadyExists, setBerryAlreadyExists] = useState(false)

    const checkIfBerryAlreadyExists = () => {
        let berryExists = false
        for (let i=0; i<berries.length; i++) {
            if (berries[i].name.toLowerCase() === newBerryInput.toLowerCase()) {
                console.log('found matching berry:', newBerryInput)
                berryExists = true
                break
            }
        } 
        return berryExists
    }

    const handleAddNewBerryButtonClick = () => {
        setNewBerryInput('')
        if (!checkIfBerryAlreadyExists()) {
            console.log('if')
            setBerryAlreadyExists(false)
            setBerries([{"name": newBerryInput}, ...berries])
        } else {
            console.log('else')
            setBerryAlreadyExists(true)
        }
    }

    return (
        <div>
            <input
                placeholder="new berry"
                value={newBerryInput}
                onChange={e => setNewBerryInput(e.target.value)}
            ></input>
            <button
                onClick={handleAddNewBerryButtonClick}
            >add new berry</button>
            {berryAlreadyExists && <div>You already have that berry!</div>}
        </div>
    )
}