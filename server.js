// Dependencies
const express = require("express")
const app = express()
// const cars = require("./models/cars.js"); 
const mongoose = require("mongoose")
const Vehicles = require("./models/vehicles.js");
const methodOverride = require("method-override")
app.use(express.static('public'));

// Environment Variables
require("dotenv").config()

// Database
mongoose.connect(process.env.DATABASE_URI)

// Database Connection Error/Success
const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"))
db.on("connected", () => console.log("mongo connected"))

// Middleware
app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))

// Routes
const vehiclesController = require('./controllers/vehicles.js')
app.use('/vehicles', vehiclesController)

// Root Route
app.get('/', (req,res) => {
    res.render('home.ejs')
})

// Terms Route
app.get('/terms', (req,res) => {
    res.render('terms.ejs')
})





// New Route
app.get('/cars/new', (req,res) => {
    res.render('new.ejs')
})

// Delete Route

// Update Route

// Create Route
app.post('/cars', (req,res) => {
    // cars.push(req.body)
    // res.redirect('/cars')
    Vehicles.create(req.body, (err, createdVehicle) => {
        res.redirect('/cars')   
    })
})

// Edit Route
app.get('/cars/:id/edit', (req,res) => {
    Vehicles.findById(req.params.id, (err, foundVehicle) => {
        res.render('edit.ejs', {
            vehicle: foundVehicle,
        })
    })
})

// Show Route  
app.get('/cars/:id', (req,res) => {
    Vehicles.findById(req.params.id, (err, foundVehicle) => {
        res.render('show.ejs', {
            vehicle: foundVehicle,
        })
    })
})

// Listen
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Fast cars, slow cars...")
})