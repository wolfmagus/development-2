import React from "react"

export default function Movie(props){
    const {title, genre, _id} = props // The title, genre, _id properties of props will now be their own variables
    console.log(props)
    return (
        <div className="movie">
            <h1>Title: {title}</h1>
            <p>Genre: {genre}</p>
        </div>
    )
}