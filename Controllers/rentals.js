// Dependencies
const express = require('express');
const rentalRouter = express.Router();
const Rentals = require('../models/rentals.js');

// Routes
// Seed
const rentalsSeed = require('../models/rentalSeed.js')    
rentalRouter.get('/seed', (req, res) => {
    Rentals.deleteMany({}, (error, allRentals) => {})
    Rentals.create(rentalsSeed, (error, data) => {
        res.redirect('/rentals', {
            currentUser: req.session.currentUser
        })
    })
})

// Index Route
rentalRouter.get('/', (req,res) => {
    Rentals.find({}, (err, allRentals) => {     
    res.render('rentals/index.ejs', {
        rentals: allRentals,
        currentUser: req.session.currentUser
        })
    })
})

// New Route
rentalRouter.get('/new', (req,res) => {
    res.render('rentals/new.ejs', {
        currentUser: req.session.currentUser
    })
})

// Delete Route
rentalRouter.delete('/:id', (req,res) => {
    Rentals.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/rentals')
    })
})

// Update Route
rentalRouter.put('/:id', (req,res) => {
    Rentals.findByIdAndUpdate(req.params.id, 
        req.body , {new:true}, 
        (err, updatedModel) => {
            res.redirect('/rentals')
        })
})

// Create Route
rentalRouter.post('/', (req,res) => {
    Rentals.create(req.body, (error, createdRental) => {
        res.redirect('/rentals', {
            currentUser: req.session.currentUser
        })
    })
})

// Edit Route
rentalRouter.get('/:id/edit', (req,res) => {
    Rentals.findById(req.params.id, (err, foundRental) => { 
        res.render('rentals/edit.ejs', {
            rental: foundRental,
            currentUser: req.session.currentUser
        })
    })
})

// Show Route
rentalRouter.get('/:id', (req,res) => {
    Rentals.findById(req.params.id, (err, foundRental) => {
        res.render('rentals/show.ejs', {
            rental: foundRental,
            currentUser: req.session.currentUser
        })
    })
})

//Export Router
module.exports = rentalRouter;