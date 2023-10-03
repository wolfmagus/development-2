const express = require('express')
const app = express()
//middleware for every request
//parse to json
app.use(express.json())

//Go to bounties router
app.use("/bounties", require("./routes/bountyRouter.js"))

//listen for server requests on this port
app.listen(9000, () =>{ //Tell the server to listen for requests
    console.log("The server is running on Port 9000") //function informs user of port the server is using with a console.log
})