const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      expressValidator = require('express-validator'),
      LocalStrategy = require('passport-local').Strategy,
      User = require('../models/adminUser')


router.use(expressValidator());
require('dotenv').load();

passport.serializeUser(function(user, done) {
  done(null, user);
 });
 
passport.deserializeUser(function(obj, done) {
  done(null, obj);
 });


/* Email/password */
router.post('/local',
  passport.authenticate('local', { failureRedirect: '/admin/' , successRedirect: '/admin' }),
  function(req, res) {
    res.redirect('/admin')
  });

module.exports = router
