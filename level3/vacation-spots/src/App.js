import React from "react"
import spots from "./spots"
import Spot from "./Spot"

function App(){
    const spotList = spots.map((spot, index) => {
        return (
            <Spot
                key={index}    
                place={spot.place}
                price={spot.price}
                timeToGo={spot.timeToGo}
            />
        )
    })   
 
    return (
        <div>
            {spotList}
        </div>
    )

}

export default App;