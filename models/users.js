// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    email: {type: String, required: [true, "Email is required."],unique: [true, 'Email is in use.']},
    password: {type: String, required: [true, "Password is required."]},
    firstName: {type: String, required: [true, "First name is required."]},
    lastName: {type: String, required: [true, "Last name is required."]},
    addressStreet: {type: String, required: [true, "Address is required."]},
    addressCity: {type: String, required: [true, "City is required."]},
    addressState: {type: String, required: [true, "State is required."]},
    addressZip: {type: String, required: [true, "Zip code is required."]},
}, {timestamps: true});

// Create Model
const Users = mongoose.model('User', UserSchema);

// Export Model
module.exports = Users;

