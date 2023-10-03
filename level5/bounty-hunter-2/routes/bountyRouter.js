const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounties = [
    {firstName:"Darth", lastName:"Vader", living:"Dead", bountyAmount:"", type:"", _id:uuidv4()},
    {firstName:"Obi Wan", lastName:"Kenobi", living:"Live", bountyAmount:"", type:"", _id:uuidv4()},
    {firstName:"Darth", lastName:"Maul", living:"Live", bountyAmount:"", type:"", _id:uuidv4()},
    {firstName:"Luke", lastName:"Skywalker", living:"Dead", bountyAmount:"", type:"", _id:uuidv4()},
    {firstName:"Naruto", lastName:"Uzamaki", living:"Live", bountyAmount:"", type:"", _id:uuidv4()}
]

//GET All Request
bountyRouter.get("/",(req, res)=>{
    res.send(bounties)//Sends a response to the client containing all the bounties in the bounties array
})

//GET One Request
bountyRouter.get("/:bountyId", (req, res) => {//bountyId is a parameter or placeholder param syntax is "/:parameter"
    //bountyId becomes whatever value is entered after the endpoint
const bountyId = req.params.bountyId //Params captures the value of the provide parameter. Stored in bountyId variable
const foundBounty = bounties.find(bounty => bounty._id === bountyId)// Use .find method to find the bounty in the database
                            // that matches the id of the bounty in the request 
res.send(foundBounty)//Send back result as found bounty
})

//POST One Request 
bountyRouter.post("/", (req, res) =>{//When a client sends a POST request to this endpoint(/bounty),
    // the code within the function will be executed.

const newBounty = req.body //The bounty data sent by the user is being assigned to newBounty variable
newBounty._id = uuidv4()
bounties.push(newBounty) //bounties array is having the new bounty added to the end of the array
res.send(`Added new bounty ${newBounty.firstName} to the database` )//Sends response to client about most recently added bounty
})

//DELETE one
// bountyRouter.delete("/:bountyId", (req, res)=>{
//    const bountyId = req.params.bountyId
//    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//    bounties.splice(bountyIndex, 1)
//    res.send(`Successfully deleted bounty at id: ${bountyId}`)
// })

//DELETE one modified
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
 
    if (bountyIndex !== -1) {
        const deletedBounty = bounties.splice(bountyIndex, 1)[0];
        res.send(`Successfully deleted bounty: ${deletedBounty.firstName} ${deletedBounty.lastName} from the database!`);
    } else {
        res.status(404).send(`Bounty with id ${bountyId} not found`);
    }
 });
 // In this modification, deletedBounty will hold the deleted bounty object,
 // and you can access its firstName property when sending the response.
 // Additionally, I added a check to handle the case where the specified bountyId is not found,
 // returning a 404 status in that case.

//PUT one
bountyRouter.put("/:bountyId", (req, res)=>{
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)

    res.send(updatedBounty)
})

module.exports = bountyRouter