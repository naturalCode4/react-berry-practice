import React from "react"

function BerriesList({filteredBerries, setBerries, berries}) {

    const deleteBerry = (berry) => {
        let indexOfBerry = -1
        const berriesLength = berries.length
        for (let i=0; i<berriesLength; i++) {
            if (berries[i].name === berry) {
                indexOfBerry = i
                break
            }
        }
        setBerries([...berries.slice(0, indexOfBerry), ...berries.slice(indexOfBerry + 1, berriesLength)])
    }

    return (
        <div>
            {filteredBerries.map(berry => {
                return (
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <div
                            key={berry.name}
                        >
                            {berry.name}</div>
                        <button
                            onClick={() => deleteBerry(berry.name)}
                        >delete berry</button>
                    </div>
                )
            })}
        </div>
    )
}

export default BerriesList