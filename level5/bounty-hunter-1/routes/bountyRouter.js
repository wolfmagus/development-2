const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounties = [
    {firstName:"Darth", lastName:"Vader", living:"Dead", bountyAmount:"", type:"", id_:uuidv4()},
    {firstName:"Obi Wan", lastName:"Kenobi", living:"Live", bountyAmount:"", type:"", id_:uuidv4()},
    {firstName:"Darth", lastName:"Maul", living:"Live", bountyAmount:"", type:"", id_:uuidv4()},
    {firstName:"Luke", lastName:"Skywalker", living:"Dead", bountyAmount:"", type:"", id_:uuidv4()},
    {firstName:"Naruto", lastName:"Uzamaki", living:"Live", bountyAmount:"", type:"", id_:uuidv4()}
]

//GET Request
bountyRouter.get("/",(req, res)=>{
    res.send(bounties)//Sends a response to the client containing all the bounties in the bounties array
})
//POST Request 
bountyRouter.post("/", (req, res) =>{//When a client sends a POST request to this endpoint(/bounty),
    // the code within the function will be executed.

const newBounty = req.body //The bounty data sent by the user is being assigned to newBounty variable
newBounty._id = uuidv4()
bounties.push(newBounty) //bounties array is having the new bounty added to the end of the array
res.send(`Added new bounty ${newBounty.firstName} to the database` )//Sends response to client about most recently added bounty
})

module.exports = bountyRouter