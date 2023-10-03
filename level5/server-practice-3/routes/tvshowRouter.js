const express = require("express")
const tvshowRouter = express.Router()
const {v4: uuidv4} = require('uuid')


const tvShows = [
    { title: "Rick and Morty", _id: uuidv4()},
    { title: "Watchmen", _id: uuidv4()},
    { title: "Westworld", _id: uuidv4()},
    { title: "Friends", _id: uuidv4()}
]

//GET Request
tvshowRouter.get("/",(req, res)=> {
    res.send(tvShows)//Sends a response to the client containing all the tvshows in the tvshows array
})
//Get One Request
tvshowRouter.get("/:tvshowId", (req, res) => {//id is a parameter or placeholder param syntax is "/:parameter"
    const tvShowId = req.params.tvshowId //request the parameter called movieId 
    const foundShow = tvShows.find(show => show._id === tvShowId)// Use .find method to find the movie in the database
                                                                        // that matches the id of the movie in the request 
    res.send(foundShow)//Send back result as found movie
})

//Post Request
tvshowRouter.post("/", (req, res) =>{//When a client sends a POST request to this endpoint(/tvshows),
                                    // the code within the function will be executed.
    
    const newShow = req.body //The new show data sent by the user is being assigned to newShow variable
    newShow._id = uuidv4()
    tvShows.push(newShow) //movies array is having the new shoe added to the end of the array
    res.send(`Added new movie ${newShow.title} to the database` )//Sends response to client about most recently added show
})

module.exports = tvshowRouter