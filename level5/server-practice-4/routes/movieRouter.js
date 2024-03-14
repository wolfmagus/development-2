const express = require("express")
const movieRouter = express.Router()
const {v4: uuidv4} = require('uuid')

//This is an extension of the server that specifically handle the movie route
//The movie route lets the user use CRUD operations on the movie data

//Fake Data
const movies = [
    {title:"die hard", genre:"action", _id: uuidv4()},
    {title:"star wars", genre:"fantasy", _id: uuidv4()},
    {title:"lion king", genre:"fantasy", _id: uuidv4()},
    {title:"friday", genre:"comedy", _id: uuidv4()}
    ]

//get request requires 2 arguments (Endpoint, Callback function)
//GET All Request
movieRouter.get("/",(req, res)=>{
    res.status(200)
    res.send(movies)//Sends a response to the client containing all the movies in the movies array
    
})

//GET One Request
movieRouter.get("/:movieId", (req, res, next) => {//movieId is a parameter or placeholder param syntax is "/:parameter"
                                                //movieId becomes whatever value is entered after the endpoint
    const movieId = req.params.movieId //Params captures the value of the provide parameter. Stored in movieId variable
    const foundMovie = movies.find(movie => movie._id === movieId)// Use .find method to find the movie in the database
                                                                        // that matches the id of the movie in the request
    if(!foundMovie){
        const error = new Error(`The item with id ${movieId} was not found.`)
        res.status(500)//Returns specific error code
        return next(error) 
    }                                                                     
    res.status(200).send(foundMovie)//Set the status. Send back result as found movie
})

//GET by genre
movieRouter.get("/search/genre", (req, res, next) =>{
    const genre = req.query.genre
    if(!genre){
        const error = new Error("You must provide a genre")
        res.status(500)
        return next(error)
    }
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.status(200).send(filteredMovies)
})

//POST One Request 
movieRouter.post("/", (req, res) =>{//When a client sends a POST request to this endpoint(/movies),
    // the code within the function will be executed.

const newMovie = req.body //The new movie data sent by the user is being assigned to newMovie variable
newMovie._id = uuidv4()
movies.push(newMovie) //movies array is having the new movie added to the end of the array
//res.send(`Added new movie ${newMovie.title} to the database` )//Sends response to client about most recently added movie
res.status(201).send(newMovie)
})
//DELETE One Request
movieRouter.delete("/:movieId", (req, res)=>{
  const movieId = req.params.movieId
  const movieIndex = movies.findIndex(movie => movie._id === movieId)
  movies.splice(movieIndex, 1)
  res.send("Successfully deleted movie!")

})

//PUT on Request
movieRouter.put("/:movieId", (req, res)=>{
    const movieId = req.params.movieId
    const updateObject = req.body
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], updateObject)//object of specific movie at specific index of array
                                                                //is being merged with new object
    res.status(201).send(updatedMovie)                                                        
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