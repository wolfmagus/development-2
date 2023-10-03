import React from "react"

function Pet(props) {
    return (
        <div>
            <h3>Name:{props.petsName}</h3>
            <h3>Breed:{props.petsBreed}</h3>
        </div>
    )
}

export default Pet