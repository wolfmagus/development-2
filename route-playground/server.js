const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = 8000

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true)

mongoose.connect(
    'mongodb+srv://wolfmagus0:ADTC9t8Ll3WPagPV@cluster0.s7twxsk.mongodb.net/playground', 
    () => console.log('Connected to the DB')
)

app.use('/food', require('./routes/foodRouter'))



app.use((err, req, res, next) => {
    console.log(err)
    
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})