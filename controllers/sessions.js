// Dependencies
const express = require('express');
const sessionsRouter = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models/users.js');

// Routes

// New Route
sessionsRouter.get('/login', (req,res) => {
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentUser
    })
})

// Delete Route
sessionsRouter.delete('/', (req,res) => {
    req.session.destroy(() => {
        res.redirect('/sessions/login')
    })
})

// Create Route
sessionsRouter.post('/', (req,res) => {
    Users.findOne({
        email: req.body.email}, 
        (err, foundUser) => {
            if(bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser;
                res.redirect('/users')
            } else {
                res.send('Wrong password')
            }
        })
})

// Show Route
sessionsRouter.get('/logout', (req,res) => {
    console.log(localStorage.getItem('dpremiumUser'))
        res.render('sessions/logout.ejs', {
        currentUser: req.session.currentUser
    })
})

// Export
module.exports = sessionsRouter;