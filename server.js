const express = require("express")
const app = express()
const PORT = 3000

const cars = require("./models/cars.js") 

app.get('/', (req,res) => {
    res.send('Welcome to dPremium Auto Rentals!')
})

app.get('/cars/:id', (req,res) => {
    res.send(cars[req.params.id])
})

app.get('/cars', (req,res) => {
    res.render('index.ejs', {
        allCars: cars
    })
})

app.listen(PORT, () => {
    console.log("Fast cars, slow cars...")
})