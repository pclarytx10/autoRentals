const express = require('express');
const vehicleRouter = express.Router();
const Vehicles = require('../models/vehicles.js');

//Routes
// Seed
const carsSeed = require('../models/carsSeed.js')
vehicleRouter.get('/seed', (req, res) => {
	Vehicles.deleteMany({}, (error, allVehicles) => {})

	Vehicles.create(carsSeed, (error, data) => {
		res.redirect('/cars')
	})
})

// Index Route
vehicleRouter.get('/', (req,res) => {
    Vehicles.find({}, (err, allVehicles) => {
        res.render('vehicles/index.ejs', {
            vehicles: allVehicles
        })
    })
})

// New Route
vehicleRouter.get('/new', (req,res) => {
    res.render('vehicles/new.ejs')
})

// Delete Route
vehicleRouter.delete('/:id', (req,res) => {
    Vehicles.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect('/cars')
    })
})

// Update Route
vehicleRouter.put('/:id', (req,res) => { 
    if (JSON.stringify(req.body.photos.length) <= 1) {
        req.body.photos = "no_photos.png"
    } else {
        req.body.photos = req.body.photos.split(',')
    }
    Vehicles.findByIdAndUpdate(req.params.id, 
        req.body, {new:true}, 
        (err, updatedVehicle) => {
            res.redirect(`/cars/${req.params.id}`)
        })
})

// Create Route
vehicleRouter.post('/', (req,res) => {
    if (JSON.stringify(req.body.photos.length) <= 1) {
        req.body.photos = "no_photos.png"
    } else {
        req.body.photos = req.body.photos.split(',')
    }
    Vehicles.create(req.body, (err, createdVehicle) => {
        res.redirect('/cars')   
    })
})

// Edit Route
vehicleRouter.get('/:id/edit', (req,res) => {
    Vehicles.findById(req.params.id, (err, foundVehicle) => {
        res.render('vehicles/edit.ejs', {
            vehicle: foundVehicle
        })
    })
})

// Show Route  
vehicleRouter.get('/:id', (req,res) => {
    Vehicles.findById(req.params.id, (err, foundVehicle) => {
        res.render('vehicles/show.ejs', {
            vehicle: foundVehicle
        })
    })
})


module.exports = vehicleRouter;
