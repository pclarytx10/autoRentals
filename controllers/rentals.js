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
        res.redirect('/rentals')
    })
})

// Index Route
rentalRouter.get('/', (req,res) => {
    console.log('Rentals Index')
    Rentals.find({}, (err, allRentals) => {     
    res.render('rentals/index.ejs', {
        rentals: allRentals
        })
    })
})

// New Route
rentalRouter.get('/new', (req,res) => {
    console.log('New Rental');
    res.render('rentals/new.ejs')
})

// Delete Route
rentalRouter.delete('/:id', (req,res) => {
    Rentals.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/rentals')
    })
})

// Update Route
rentalRouter.put('/:id', (req,res) => {
    console.log('Rentals Update')
    Rentals.findByIdAndUpdate(req.params.id, 
        req.body , {new:true}, 
        (err, updatedModel) => {
            res.redirect('/rentals/' + req.params.id)
        })
})

// Create Route
rentalRouter.post('/', (req,res) => {
    console.log('Create a rental');
    Rentals.create(req.body, (error, createdRental) => {
        res.redirect('rentals/')
    })
})

// Edit Route
rentalRouter.get('/:id/edit', (req,res) => {
    console.log('Rental Edit')
    Rentals.findById(req.params.id, (err, foundRental) => { 
        res.render('rentals/edit.ejs', {
            rental: foundRental
        })
    })
})

// Show Route
rentalRouter.get('/:id', (req,res) => {
    console.log('Rental Show')
    Rentals.findById(req.params.id, (err, foundRental) => {
        res.render('rentals/show.ejs', {
            rental: foundRental
        })
    })
})

//Export Router
module.exports = rentalRouter;