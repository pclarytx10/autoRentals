// Dependencies
const express = require('express');
const sessionsRouter = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user.js');

// Routes

// New Route
sessionsRouter.get('/login', (req,res) => {
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentUser
    })
})

// Delete Route

// Create Route

// Export
module.exports = sessionsRouter;