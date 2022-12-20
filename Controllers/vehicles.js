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

module.exports = vehicleRouter;
