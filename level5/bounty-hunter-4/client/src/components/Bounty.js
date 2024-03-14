import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm.js"

export default function Bounty(props){
    const {firstName, lastName, price, type, living, _id} = props // The properties of props will now be their own variables
    const [editToggle, setEditToggle] = useState(false)
    //console.log(props)
    return (
        <div className="bounty">
            { !editToggle ?
            <>
            <h1>firstName: {firstName}</h1>
            <h1>lastName: {lastName}</h1>
            <h1>price: {price}</h1>
            <h1>type: {type}</h1>
            <h1>living: {living}</h1>
           
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
                firstName={firstName}
                lastName={lastName}
                price={price}
                type={type}
                living={living}
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