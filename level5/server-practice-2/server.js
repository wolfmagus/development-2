const express = require("express")//Look for express in node modules and import required parts
const app = express()// Call the express function imported from line 1 and store it in app variable
const {v4: uuidv4} = require('uuid')

//Middleware (for every request)
//use method tells server to use something in this case a function
//.use takes 2 arguments .use(mount path, function )
app.use(express.json())// Looks for a request body, takes json parses it to js and puts it in "req.body"


//Fake data
const movies = [
{title:"die hard", genre:"action", _id: uuidv4()},
{title:"star wars", genre:"fantasy", _id: uuidv4()},
{title:"lion king", genre:"fantasy", _id: uuidv4()},
{title:"friday", genre:"comedy", _id: uuidv4()}
]

//route
//Get Request
//get request requires 2 arguments (Endpoint, Callback function)
app.get("/movies",(req, res)=>{
    res.send(movies)//Sends a response to the client containing all the movies in the movies array
})
//Post Request
app.post("/movies", (req, res) =>{//When a client sends a POST request to this endpoint(/movies),
                                    // the code within the function will be executed.
    
    const newMovie = req.body //The new movie data sent by the user is being assigned to newMovie variable
    newMovie._id = uuidv4()
    movies.push(newMovie) //movies array is having the new movie added to the end of the array
    res.send(`Added new movie ${newMovie.title} to the database` )//Sends response to client about most recently added movie
})

//listen requires 2 arguments (PORT, Callback function)
app.listen(9000, () =>{ //Tell the server to listen for requests
    console.log("The server is running on Port 9000") //function informs user of port the server is using with a console.log
})
