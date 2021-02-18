const express = require('express');
const db = require('../models');
const router = express.Router();


// URL prefix — /api

// Signup — POST /api/signup
router.post('/signup', (req, res) => {
  db.User.create(req.body)
    .then(user => res.json(user))
    .catch(err => {
      console.log(`🔥 Error in the POST signup:`, err);
      res.json({ 'error': err });
    })
});

// Login — POST /api/login
router.post('/login', (req, res) => {
  res.json({ message: 'LOGIN POST'});
});


module.exports = router;