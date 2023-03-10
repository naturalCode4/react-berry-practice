import React from "react"

export function Filter({filterInput, setFilterInput}) {
    return (
        <div>
            <input
                placeholder="filter berries"
                value={filterInput}
                onChange={e => setFilterInput(e.target.value)}
            />
        </div>
    )
}