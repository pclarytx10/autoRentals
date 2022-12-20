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
app.use('/cars', vehiclesController)

// Root Route
app.get('/', (req,res) => {
    res.render('home.ejs')
})

// Terms Route
app.get('/terms', (req,res) => {
    res.render('terms.ejs')
})

// Listen
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Fast cars, slow cars...")
})