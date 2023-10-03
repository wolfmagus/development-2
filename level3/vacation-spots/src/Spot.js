import React from "react"

function Spots(props){
    //console.log(`Spots of ${props.place}: ${props.name}`)
    // const {place, price, timeToGo} = props
    return (
        <div>
            <h1>Place: {props.place}</h1>
            <h1>Price: {props.price}</h1>
            <h1>Time to go: {props.timeToGo}</h1>
        </div>
    )
}

export default Spots