const express = require("express")//Look for express in node modules and import required parts
const app = express()// Call the express function imported from line 1 and store it in app variable
const morgan = require("morgan")
const mongoose = require("mongoose")


//Middleware (for every request)
//use method tells server to use something in this case a function
//.use takes 2 arguments .use(mount path, function )
app.use(express.json())// Looks for a request body, takes json parses it to js and puts it in "req.body"
app.use(morgan("dev"))

mongoose.set('strictQuery', false)
//Connect to DB
mongoose.connect(
    "mongodb+srv://wolfmagus0:ADTC9t8Ll3WPagPV@cluster0.s7twxsk.mongodb.net/",//create new folder after .net/
 (err)=> console.log("connected to database", err))

// Connect to DB
// mongoose.connect(
//     "mongodb+srv://wolfmagus:M%21ngekyou4464@portfoliocluster.ioe57.mongodb.net/?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true }, // Add options for the new parser and topology
//     (err) => {
//       if (err) {
//         console.error('Error connecting to MongoDB:', err);
//       } else {
//         console.log('Connected to MongoDB successfully!');
//       }
//     }
//   );

// mongoose.connect(
//   "mongodb+srv://wolfmagus:M%21ngekyou4464@portfoliocluster.ioe57.mongodb.net/?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//       if (err) {
//           console.error('Error connecting to MongoDB:', err.message);
//           process.exit(1); // Exit the process on connection failure
//       } else {
//           console.log('Connected to MongoDB successfully!');
//       }
//   }
// );

  

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });
//   async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);
//routes
//middleware that will give my server access to movieRouter
//endpoint for url, import the required files
app.use("/movies", require("./routes/movieRouter.js"))//go to movieRouter.js file

//Error Handler
app.use((err, req, res) =>{//Specifically for error handling when using err argument
    console.log(err)
    return res.send({errMsg: err.message})
})

//listen requires 2 arguments (PORT, Callback function)
app.listen(9000, () =>{ //Tell the server to listen for requests
    console.log("The server is running on Port 9000") //function informs user of port the server is using with a console.log
})