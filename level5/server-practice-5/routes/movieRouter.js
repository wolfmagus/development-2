const express = require("express")
const movieRouter = express.Router()
const Movie = require('../models/movie.js')

//This is an extension of the server that specifically handle the movie route
//The movie route lets the user use CRUD operations on the movie data
//------- This router is a part of my server ----------
//------- My server moves data between the frontend and backend ----------
//------- All of the requests are communicating with a mongo database -------------

//get request requires 2 arguments (Endpoint, Callback function)
//GET All Request
//mongoose query
movieRouter.get("/",(req, res, next) =>{
    Movie.find((err, movies)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

//GET One Request
// movieRouter.get("/:movieId", (req, res, next) => {//movieId is a parameter or placeholder param syntax is "/:parameter"
//                                                 //movieId becomes whatever value is entered after the endpoint
//     const movieId = req.params.movieId //Params captures the value of the provide parameter. Stored in movieId variable
//     const foundMovie = movies.find(movie => movie._id === movieId)// Use .find method to find the movie in the database
//                                                                         // that matches the id of the movie in the request
//     if(!foundMovie){
//         const error = new Error(`The item with id ${movieId} was not found.`)
//         res.status(500)//Returns specific error code
//         return next(error) 
//     }                                                                     
//     res.status(200).send(foundMovie)//Set the status. Send back result as found movie
// })

//GET by genre
movieRouter.get("/search/genre", (req, res, next) =>{
    Movie.find({ genre: req.query.genre}, (err, movies) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

//POST One Request 
movieRouter.post("/", (req, res, next) =>{
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })
})
//DELETE One Request
movieRouter.delete("/:movieId", (req, res)=>{
    Movie.findOneAndDelete({_id: req.params.movieId}, (err, deletedItem)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
    })
})

//PUT on Request
movieRouter.put("/:movieId", (req, res, next)=>{
    Movie.findOneAndUpdate(
        {_id: req.params.movieId}, //find this one to update
        req.body, //update the object with this data
        {new: true}, //send back the updated version 
        (err, updatedMovie) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }

    )                                                         
})

// //Alternative syntax
// movieRouter.route("/") //route function
// .get((req, res) =>{
//     res.send(movies)
// })
// .post((req, res) =>{
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.send(`Successfully added ${newMovie.title} to the database!`)
// })

module.exports = movieRouter