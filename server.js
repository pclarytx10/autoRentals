// Dependencies
const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.static('public'));
const cars = require("./models/cars.js") 

// Environment Variables
require("dotenv").config()

// Database
mongoose.connect(process.env.DATABASE_URI)

// Database Connection Error/Success
const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"))
db.on("connected", () => console.log("mongo connected"))

// Middleware
app.use(express.urlencoded({extended: true}))

// Routes
// Root Route
app.get('/', (req,res) => {
    res.redirect('/cars')
})

// Index Route
app.get('/cars', (req,res) => {
    res.render('index.ejs', {
        allCars: cars
    })
})

// New Route

// Delete Route

// Update Route

// Create Route

// Edit Route

// Show Route  
app.get('/cars/:id', (req,res) => {
    res.render('show.ejs', {
        car: cars[req.params.id],
    })
})

// Listen
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Fast cars, slow cars...")
})