const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VehicleSchema = new Schema(
    {
        name: {type: String, required: [true, "Name is required."], unique: [true, 'Name is in use.']},
        make: String,
        model: String,
        year:  {type: Number, default: 2022},
        mileage: {type: Number, default: 0},
        color: String,
        type: {type: String, default: "Sedan"},
        seats: {type: Number, default: 5},
        doors: {type: Number, default: 4},
        drive: {type: String, default: "FWD"},
        fuelType: {type: String, default: "Gas"},
        price: {type: Number, default: 0},
        locationCity: {type: String, default: "Temple"},
        locationState: {type: String, default: "TX"},
        vin: String,
        license: String,
        registration: String,
        registrationDate: {type: Date, default: "08-01-2022"},
        insurance: String,
        insuranceDate: {type: Date, default: "08-01-2022"},
        photos: Array
    },
    { timestamps: true }
);

// Create Model
const Vehicles = mongoose.model('Vehicle', VehicleSchema);

// Export Model
module.exports = Vehicles;