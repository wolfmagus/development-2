const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Movie Blueprint
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    
    genre: String 
    ,
    releaseYear: Number
})
//model is a method of mongoose that requires a (name of the model, and a schema )
module.exports = mongoose.model("Movie", movieSchema)
