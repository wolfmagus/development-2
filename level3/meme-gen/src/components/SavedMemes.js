import React from "react"
//import {useState} from "react"

function SavedMemes(props){

    const {meme} = props
    return(
        <main>
            <h1>List of Memes</h1>
            <h3>Top Text: {meme.topText}</h3>
            <h3>Bottom Text: {meme.bottomText}</h3>

        </main>
    )
}

export default SavedMemes