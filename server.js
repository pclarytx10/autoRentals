// Dependencies
const express = require("express")
const app = express()
const session = require("express-session")
const mongoose = require("mongoose")
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
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

// Controllers
const vehiclesController = require('./controllers/vehicles.js')
app.use('/cars', vehiclesController)
const rentalsController = require('./controllers/rentals.js')
app.use('/rentals', rentalsController)
const usersController = require('./controllers/users.js')
app.use('/users', usersController)
const sessionsController = require('./controllers/sessions.js')
app.use('/sessions', sessionsController)

// Root Route
app.get('/', (req,res) => {
    res.render('home.ejs', {
        currentUser: req.session.currentUser
    })
})

// Terms Route
app.get('/terms', (req,res) => {
    res.render('terms.ejs', {
        currentUser: req.session.currentUser
    })
})

// Listen
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Fast cars, slow cars...")
})