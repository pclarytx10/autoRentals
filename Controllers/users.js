// Dependencies
const express = require('express');
const userRouter = express.Router();
const Users = require('../models/users.js');
const bcrypt = require('bcrypt');

// Index Route
userRouter.get('/', (req,res) => {
    Users.find({}, (err, allUsers) => {
        res.render('users/index.ejs', {
            users: allUsers
        })
    })
})

// New Route
userRouter.get('/new', (req,res) => {
    res.render('users/new.ejs')
})

// Delete Route

// Update Route

// Create Route
userRouter.post('/', (req,res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    Users.create(req.body, (error, createdUser) => {
        res.redirect('/users')
    })
})

// Edit Route

// Show Route


// Export Router
module.exports = userRouter;