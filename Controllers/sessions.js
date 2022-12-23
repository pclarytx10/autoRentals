// Dependencies
const express = require('express');
const sessionsRouter = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models/users.js');

// Routes

// New Route
sessionsRouter.get('/login', (req,res) => {
    res.render('sessions/new.ejs')
})

// Delete Route

// Create Route

// Export
module.exports = sessionsRouter;