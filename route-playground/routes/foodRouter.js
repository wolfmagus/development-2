const express = require('express')
const Food = require('../models/food')
const { get } = require('mongoose')
const foodRouter = express.Router()

// Get All
    // Get requests should return an empty array at first until you build the post request and add items to the DB

    // Callback 1

    foodRouter.get('/', (req, res, next) => {//Go through express.Router to the default endpoint
        Food.find((err, food) => {//run the find function on Food
                                // find method returns the value of the first element that passes a test
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(food)
        })
    })

    // Async & Await 1

    foodRouter.get('/async', async(req, res, next) => { //Go to custom endpoint and run function upon a get request
                                                        //make request asynchronous, use parameters request, response, next
        try{ //try to do the following
            const food = await Food.find() // find method returns all items that match food collection
                                            //wait for find to get a result and store it in food variable 
            return res.status(200).send(food) // Once food has a value, send the result to the frontend
        } catch(err){//If try fails, run error
            res.status(500)//respond with error 500
            return next(err)// send error to user
        }
    })


// Post a food

    // Callback 2

    foodRouter.post('/addFood', (req, res, next) => {
        const newFood = new Food(req.body)
        newFood.save((err, savedFood) => {
            //insert your code
            if(err){
                res.status(500)
                return next(err)
            } 
            res.status(201).send(savedFood)
        })
    })

    // Async & Await 2

    foodRouter.post('/addFoodAsync', async(req, res, next) => {
        try{
            const newFood = new Food(req.body)
            const savedFood = await newFood.save()

            //insert your code

        } catch(err){
            // insert your code
            res.status(500)
            return next(err)
        }
    })

// Callback 3
foodRouter.delete('/:foodID', (req, res, next) => {
    const foodID = req.params.foodID;
    Food.findByIdAndRemove(foodID, (err, deletedFood) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.status(200).send(`Food with ID ${foodID} has been deleted.`);
    });
});

// Async & Await 3
foodRouter.delete('/async/:foodID', async (req, res, next) => {
    try {
        const foodID = req.params.foodID;
        const deletedFood = await Food.findByIdAndRemove(foodID);

        // insert your code for additional actions after deletion if needed

        res.status(200).send(`Food with ID ${foodID} has been deleted.`);
    } catch (err) {
        // insert your code for error handling
        res.status(500);
        return next(err);
    }
});


// Edit a food

    // Callback 4

    // Build a put request using Callbacks here


    // Async & Await 4

    // Build a put request using Async and Await here



// Extra Credit Challenge

    // Build a query get route using callbacks or async and await here
    foodRouter.get("/search", async(req, res, next)=>{
        try{
            const {property, value} = req.query// localhost:8000/food/?property=type&value=fruit ;)
            const foundFood = await Food.find({[property]: value})// example - type : fruit
            return res.status(200).send(foundFood)
        }catch(err){
            res.status(500)
            return next(err)
        }
    })

module.exports = foodRouter