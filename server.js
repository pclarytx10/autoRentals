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
// Root Route
app.get('/', (req,res) => {
    res.redirect('/cars')
})

// Seed
const carsSeed = require('./models/carsSeed.js');

app.get('/cars/seed', (req, res) => {
	Vehicles.deleteMany({}, (error, allVehicles) => {});

	Vehicles.create(carsSeed, (error, data) => {
		res.redirect('/cars');
	});
});

// Index Route
// app.get('/cars', (req,res) => {
//     res.render('index.ejs', {
//         allCars: cars
//     })
// })

app.get('/cars', (req,res) => {
    Vehicles.find({}, (err, allVehicles) => {
        res.render('index.ejs', {
            vehicles: allVehicles,
        })
    })
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