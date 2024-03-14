const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory")

inventoryRouter.post('/', (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

inventoryRouter.get("/", (req, res, next) =>{
    Inventory.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

inventoryRouter.delete("/:id", (req, res, next)=> {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(`Deleted Item: ${deletedItems.product}`)
})


inventoryRouter.put(":/id", (req, res, next) =>{
    Inventory.findOneAndUpdate({_id: req.params.id},
        req.body,
    {new: true},
    (err, updatedItem)=>{
        if(err){
            res.status(500)
        }
        return res.status(201).send(updatedItem)
    })
})

// inventoryRouter.get('/category', (req, res, next)=>{
//     Inventory.find({category: req.query.category}, (err, items) =>{
//         if(err){
//             res.status(500)
//         }
//     }) 
//     return res.status(201).send(items)
// })

module.exports = inventoryRouter