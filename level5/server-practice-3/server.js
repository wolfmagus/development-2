const express = require("express")//Look for express in node modules and import required parts
const app = express()// Call the express function imported from line 1 and store it in app variable
const morgan = require("morgan")

//Middleware (for every request)
//use method tells server to use something in this case a function
//.use takes 2 arguments .use(mount path, function )
app.use(express.json())// Looks for a request body, takes json parses it to js and puts it in "req.body"
app.use(morgan("dev"))
//routes
//middleware that will give my server access to movieRouter
//endpoint for url, import the required files
app.use("/movies", require("./routes/movieRouter.js"))//go to movieRouter.js file
app.use("/tvshows", require("./routes/tvshowRouter.js"))//go to tvshowRouter.js file

//listen requires 2 arguments (PORT, Callback function)
app.listen(9000, () =>{ //Tell the server to listen for requests
    console.log("The server is running on Port 9000") //function informs user of port the server is using with a console.log
})