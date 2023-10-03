import React from "react"
//import images from "./images"

//Display the header with the title and a Doje image
function Header() {
    return (
        <header className="header">
            <img src="./images/doje2.png" alt="The Doje shall return" className="header--image" />
            <h2 className="header--title">Header component</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

export default Header