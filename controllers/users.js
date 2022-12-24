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
userRouter.delete('/:id', (req,res) => {
    Users.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/users')
    })
})

// Update Route
userRouter.put('/:id', (req,res) => {
    // Hash the password if it is not already hashed
    if(req.body.password.substring(0,3) !== '$2b'){
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    } 
     
    Users.findByIdAndUpdate(req.params.id,
        req.body, {new:true},
        (err, updatedModel) => {
            res.redirect('/users')
        })
})

// Create Route
userRouter.post('/', (req,res) => {
    // Hash the password
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    Users.create(req.body, (error, createdUser) => {
        res.redirect('/users')
    })
})

// Edit Route
userRouter.get('/:id/edit', (req,res) => {
    Users.findById(req.params.id, (err, foundUser) => {
        res.render('users/edit.ejs', {
            user: foundUser
        })
    })
})

// Show Route
userRouter.get('/:id', (req,res) => {
    Users.findById(req.params.id, (err, foundUser) => {
        res.render('users/show.ejs', {
            user: foundUser
        })
    })
})

// Export Router
module.exports = userRouter;