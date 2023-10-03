import React from "react"
//import style from "./style.css"


function BlogPost(props){
    
        return(
            <div>
                
                <h2 className="postTitle">{props.title}</h2>
                <h3 className="postSubtitle">{props.subTitle}</h3>
                <p className="postDate">{`Posted by ${props.author} on ${props.date}`}</p>
                
            </div>
        )
    }

export default BlogPost