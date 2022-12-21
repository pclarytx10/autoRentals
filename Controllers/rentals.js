// Dependencies
const express = require('express');
const rentalRouter = express.Router();
const Rentals = require('../models/rentals.js');

// Routes
// Index Route
rentalRouter.get('/', (req,res) => {
    res.render('rentals/index.ejs')
})

// New Route

// Delete Route

// Update Route

// Create Route

// Export Router

// Show Route

//Export Router
module.exports = rentalRouter;