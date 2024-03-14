import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm.js"

export default function Bounty(props){
    const {title, genre, _id} = props // The title, genre, _id properties of props will now be their own variables
    const [editToggle, setEditToggle] = useState(false)
    //console.log(props)
    return (
        <div className="bounty">
            { !editToggle ?
            <>
            <h1>Title: {title}</h1>
            <p>Genre: {genre}</p>
            <button 
                className="delete-btn"
                onClick={()=> props.deleteBounty(_id)}>
                Delete
            </button>
            
            <button
                className="edit-btn"
                onClick={()=> setEditToggle(prevToggle => !prevToggle)}>
                Edit 
            </button>
            </> 
            :
            <>
            <AddBountyForm
                title={title}
                genre={genre}
                _id={_id}
                btnText="Submit Edit"
                submit={props.editBounty}
            />
            <button
                onClick={()=> setEditToggle(prevToggle => !prevToggle)}>
                Close
            </button>
            </>
            }
        </div>
    )
}