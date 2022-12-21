const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RentalSchema = new Schema(
    {
        rentalStartDate: {type: Date, default: Date.now},
        rentalEndDate: {type: Date, default: Date.now},
        rentalPrice: {type: Number, default: 0},
        rentalLocation: {type: String, default: "Temple,TX"},
        rentalStatus: {type: String, default: "Pending"},   
        vehicle: {type: Schema.Types.ObjectId, ref: 'Vehicle'},
        customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
    },
)

// Create Model
const Rentals = mongoose.model('Rental', RentalSchema);

// Export Model
module.exports = Rentals;