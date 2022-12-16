const express = require("express")
const app = express()
app.use(express.static('public'));
const cars = require("./models/cars.js") 
// Environment Variables
require("dotenv").config()

app.get('/', (req,res) => {
    res.send('Welcome to dPremium Auto Rentals!')
})

app.get('/cars/:id', (req,res) => {
    res.render('show.ejs', {
        car: cars[req.params.id],
    })
})

app.get('/cars', (req,res) => {
    res.render('index.ejs', {
        allCars: cars
    })
})

// Listen
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Fast cars, slow cars...")
})