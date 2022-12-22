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
        res.redirect('/rentals')
    })
})

// Edit Route
rentalRouter.get('/:id/edit', (req,res) => {
    Rentals.findById(req.params.id, (err, foundRental) => { 
        res.render('rentals/edit.ejs', {
            rental: foundRental
        })
    })
})

// Show Route
rentalRouter.get('/:id', (req,res) => {
    Rentals.findById(req.params.id, (err, foundRental) => {
        res.render('rentals/show.ejs', {
            rental: foundRental
        })
    })
})

//Export Router
module.exports = rentalRouter;