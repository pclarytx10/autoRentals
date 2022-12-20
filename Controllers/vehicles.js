const express = require('express');
const vehicleRouter = express.Router();
const Vehicles = require('../models/vehicles.js');

//Routes
// Seed
const carsSeed = require('../models/carsSeed.js');

vehicleRouter.get('/seed', (req, res) => {
	Vehicles.deleteMany({}, (error, allVehicles) => {});

	Vehicles.create(carsSeed, (error, data) => {
		res.redirect('/cars');
	});
});

// Index Route
vehicleRouter.get('/', (req,res) => {
    Vehicles.find({}, (err, allVehicles) => {
        res.render('index.ejs', {
            vehicles: allVehicles,
        })
    })
})

// New Route
vehicleRouter.get('/new', (req,res) => {
    res.render('new.ejs')
})

//todo: add update and delete routes

// Delete Route
vehicleRouter.delete('/:id', (req,res) => {
    Vehicles.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect('/cars')
    })
})

// Update Route

// Create Route
vehicleRouter.post('/', (req,res) => {
    // cars.push(req.body)
    // res.redirect('/cars')
    Vehicles.create(req.body, (err, createdVehicle) => {
        res.redirect('/cars')   
    })
})

// Edit Route
vehicleRouter.get('/:id/edit', (req,res) => {
    Vehicles.findById(req.params.id, (err, foundVehicle) => {
        res.render('edit.ejs', {
            vehicle: foundVehicle,
        })
    })
})

// Show Route  
vehicleRouter.get('/:id', (req,res) => {
    Vehicles.findById(req.params.id, (err, foundVehicle) => {
        res.render('show.ejs', {
            vehicle: foundVehicle,
        })
    })
})


module.exports = vehicleRouter;
