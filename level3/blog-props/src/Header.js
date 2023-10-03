import React from "react"
import NavBar from "./NavBar"
import style from "./style.css"

function Header(){

    return(
        
        <div className="overlay" >
            
            <NavBar />
            <h1 className="header">Clean Blog</h1>
            <h4 className="header2">A Blog Theme by Start Bootstrap</h4>
            
        </div>
        

    )
    
}

export default Header;