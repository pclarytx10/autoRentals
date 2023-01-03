// Dependencies
const express = require("express")
const app = express()
const session = require("express-session")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const MongoDBStore = require('connect-mongodb-session')(session)
const morgan = require("morgan") // HTTP request logger middleware for node.js

// Environment Variables
require("dotenv").config()

// Database
mongoose.connect(process.env.DATABASE_URI)

// Database Connection Error/Success
const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"))
db.on("connected", () => console.log("mongo connected"))

// Sessions Store
const store = new MongoDBStore({
    uri: process.env.DATABASE_URI,
    databaseName: 'autoRentals',
    collection: 'sessions'
})

// Catch errors
store.on('error', function(error) {
    console.log(error);
  },
    function(error) {
        console.log(error);
    }
)

// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
      },
      store: store,
}))
app.use(function(req, res, next){
     res.locals.currentUser = req.session.currentUser
     next()
 })
// Mogan middleware for logging HTTP requests
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}

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