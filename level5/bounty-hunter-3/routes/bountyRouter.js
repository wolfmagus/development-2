const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounties = [
    {firstName:"Darth", lastName:"Vader", living:"Dead", bountyAmount:"", type:"Sith", _id: uuidv4()},
    {firstName:"Obi Wan", lastName:"Kenobi", living:"Live", bountyAmount:"", type:"Jedi", _id: uuidv4()},
    {firstName:"Darth", lastName:"Maul", living:"Live", bountyAmount:"", type:"Sith", _id: uuidv4()},
    {firstName:"Luke", lastName:"Skywalker", living:"Dead", bountyAmount:"", type:"Jedi", _id: uuidv4()},
    {firstName:"Naruto", lastName:"Uzamaki", living:"Live", bountyAmount:"", type:"Jedi", _id: uuidv4()}
]

//get request requires 2 arguments (Endpoint, Callback function)
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

//GET by genre
bountyRouter.get("/search/genre", (req, res) =>{
    const genre = req.query.genre
    const filteredBounties = bounties.filter(bounty => bounty.genre === genre)
    res.send(filteredBounties)
})

//POST One Request 
bountyRouter.post("/", (req, res) =>{//When a client sends a POST request to this endpoint(/bounties),
    // the code within the function will be executed.

const newBounty = req.body //The new bounty data sent by the user is being assigned to newBounty variable
newBounty._id = uuidv4()
bounties.push(newBounty) //bounties array is having the new bounty added to the end of the array
//res.send(`Added new bounty ${newBounty.title} to the database` )//Sends response to client about most recently added bounty
res.send(newBounty)
})
//DELETE One Request
bountyRouter.delete("/:bountyId", (req, res)=>{
  const bountyId = req.params.bountyId
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
  bounties.splice(bountyIndex, 1)
  res.send("Successfully deleted bounty!")

})

//PUT on Request
bountyRouter.put("/:bountyId", (req, res)=>{
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)//object of specific bounty at specific index of array
                                                                //is being merged with new object
    res.send(updatedBounty)                                                        
})

// //Alternative syntax
// bountyRouter.route("/") //route function
// .get((req, res) =>{
//     res.send(bounties)
// })
// .post((req, res) =>{
//     const newBounty = req.body
//     newBounty._id = uuidv4()
//     bounties.push(newBounty)
//     res.send(`Successfully added ${newBounty.title} to the database!`)
// })

module.exports = bountyRouter