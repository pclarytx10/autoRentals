// Dependencies
const express = require('express');
const rentalRouter = express.Router();
const Rentals = require('../models/rentals.js');

// Routes
// Index Route
rentalRouter.get('/', (req,res) => {
    Rentals.find({}, (err, allRentals) => {     
    res.render('rentals/index.ejs', {
        rentals: allRentals
        })
    })
})

// New Route
rentalRouter.get('/new', (req,res) => {
    res.render('rentals/new.ejs')
})

// Delete Route

// Update Route

// Create Route
rentalRouter.post('/', (req,res) => {
    console.log(req.body)
    Rentals.create(req.body, (error, createdRental) => {
        res.redirect('/rentals')
    })
})

// Export Router

// Show Route

//Export Router
module.exports = rentalRouter;