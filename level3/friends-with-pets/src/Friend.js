import React from "react"
import Pet from "./Pet"

function Friends(props){

    const petsList = props.pets.map((pet, index)=> {
        return (
            <Pet
                key={index}    
                petsName={pet.name}
                petsBreed={pet.breed}
            />
        )
    })
    return(
        <div>
            <h1>{props.personsName}</h1>
            <h2>{props.age}</h2>
            <div>
                <h2>{props.personsName}'s Pets</h2>
                {petsList}
            </div>
        </div>
    )
}

export default Friends