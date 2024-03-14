const express = require("express")
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')

//This is an extension of the server that specifically handle the bounty route
//The bounty route lets the user use CRUD operations on the bounty data

//get request requires 2 arguments (Endpoint, Callback function)
//GET All Request
//mongoose query
bountyRouter.get("/",(req, res, next) =>{
    Bounty.find((err, bounties)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//GET One Request
// bountyRouter.get("/:bountyId", (req, res, next) => {//bountyId is a parameter or placeholder param syntax is "/:parameter"
//                                                 //bountyId becomes whatever value is entered after the endpoint
//     const bountyId = req.params.bountyId //Params captures the value of the provide parameter. Stored in bountyId variable
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)// Use .find method to find the bounty in the database
//                                                                         // that matches the id of the bounty in the request
//     if(!foundBounty){
//         const error = new Error(`The item with id ${bountyId} was not found.`)
//         res.status(500)//Returns specific error code
//         return next(error) 
//     }                                                                     
//     res.status(200).send(foundBounty)//Set the status. Send back result as found bounty
// })

//GET by genre
bountyRouter.get("/search/genre", (req, res, next) =>{
    Bounty.find({ genre: req.query.genre}, (err, bounties) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//POST One Request 
bountyRouter.post("/", (req, res, next) =>{
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})
//DELETE One Request
bountyRouter.delete("/:bountyId", (req, res)=>{
    Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedItem)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.firstName} ${deletedItem.lastName} from the database`)
    })
})

//PUT on Request
bountyRouter.put("/:bountyId", (req, res, next)=>{
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId}, //find this one to update
        req.body, //update the object with this data
        {new: true}, //send back the updated version 
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }

    )                                                         
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