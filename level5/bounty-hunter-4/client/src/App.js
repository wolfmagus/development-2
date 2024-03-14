import React, {useState, useEffect} from "react"
import axios from "axios"
import Bounty from "./components/Bounty.js"
import AddBountyForm from "./components/AddBountyForm.js"

export default function App(){
    const [bounties, setBounties] = useState([])
    //Error can be saved in state and placed in a pop up

    function getBounties(){
    //Get all the bounties from the database, then set the bounties states to that array of bounties
        axios.get("/bounties")
        .then(res => setBounties(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }
//post a new bounty with the previous four bounties and a new bounty added
    function addBounty(newBounty){
        axios.post("/bounties", newBounty)
        .then(res => {
            setBounties(prevBounties => [...prevBounties, res.data])
        })
        .catch(err => console.log(err))
    }
// Updating the backend and then filtering the bounty out on the frontend
    function deleteBounty(bountyId){
        axios.delete(`/bounties/${bountyId}`)//backend
        .then(res => {
            setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))//frontend
        })
        .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId){
        axios.put(`/bounties/${bountyId}`, updates)
        .then(res => {
            console.log("Updated Bounty Data!!!", res.data)
            setBounties(prevBounties => 
                prevBounties.map(bounty => 
                    bounty._id !== bountyId ? bounty : res.data
                )
            );
        })
        .catch(err => console.log(err));
    }
    
    function handleFilter(e){
        if(e.target.value === "reset"){
            getBounties()
        } else{
            axios.get(`/bounties/search/genre?genre=${e.target.value}`)
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
        }
    }
    
    //Run the following function when the web page changes/ reloads
    useEffect(()=> {
        getBounties()
    }, [])//fires once when there is no data that changes placed in the square brackets
    
    //Iterate over the bounties array, pass bounties array data as props to Bounty component and display all the bounties
    return (
        <div className="bounty-container">
            <AddBountyForm
                submit={addBounty}
                btnText="Add Bounty"
            />

        <h4>Filter By Genre</h4>
        <select onChange={handleFilter} className="filter-form">
            <option value="reset">All Bounties</option>
            <option value="action">Action</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
        </select>
        
          {
           bounties.map(bounty =>
            <Bounty
             {...bounty}
              key={bounty._id}
              deleteBounty={deleteBounty}
              editBounty={editBounty}/>)}
        </div>
    )
}
