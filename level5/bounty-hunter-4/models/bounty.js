const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Bounty Blueprint
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    
    price: Number 
    ,
   
    type: {
        type: String,
        enum: ["jedi", "sith"],
        required: true
    },

    living: {
        type: Boolean,
        required: true
    }
})
//model is a method of mongoose that requires a (name of the model, and a schema )
module.exports = mongoose.model("Bounty", bountySchema)