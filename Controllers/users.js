// Dependencies
const express = require('express');
const userRouter = express.Router();
const Users = require('../models/users.js');
const bcrypt = require('bcrypt');

// Index Route
userRouter.get('/', (req,res) => {
    Users.find({}, (err, allUsers) => {
        res.render('users/index.ejs', {
            users: allUsers,
            currentUser: req.session.currentUser
        })
    })
})

// New Route
userRouter.get('/new', (req,res) => {
    res.render('users/new.ejs', {
        currentUser: req.session.currentUser
    })
})

// Delete Route
userRouter.delete('/:id', (req,res) => {
    Users.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/users', {
            currentUser: req.session.currentUser
        })
    })
})

// Update Route
userRouter.put('/:id', (req,res) => {
    Users.findByIdAndUpdate(req.params.id,
        req.body, {new:true},
        (err, updatedModel) => {
            res.redirect('/users', {
                currentUser: req.session.currentUser
            })
        })
})

// Create Route
userRouter.post('/', (req,res) => {
    // Hash the password
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    Users.create(req.body, (error, createdUser) => {
        res.redirect('/users', {
            currentUser: req.session.currentUser
        })
    })
})

// Edit Route
userRouter.get('/:id/edit', (req,res) => {
    Users.findById(req.params.id, (err, foundUser) => {
        res.render('users/edit.ejs', {
            user: foundUser,
            currentUser: req.session.currentUser
        })
    })
})

// Show Route
userRouter.get('/:id', (req,res) => {
    Users.findById(req.params.id, (err, foundUser) => {
        res.render('users/show.ejs', {
            user: foundUser,
            currentUser: req.session.currentUser,
        })
    })
})

// Export Router
module.exports = userRouter;