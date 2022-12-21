const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RentalSchema = new Schema(
    {
        vehicle: String,
        customer: String,
        rentalStartDate: String,
        rentalEndDate: String,
        deliveryNeeded: String,
        totalCost: {type: Number, default: 0},
        rentalLocation: {type: String, default: "Temple,TX"},
        rentalStatus: {type: String, default: "Pending"},   
    },
)

// Create Model
const Rentals = mongoose.model('Rental', RentalSchema);

// Export Model
module.exports = Rentals;