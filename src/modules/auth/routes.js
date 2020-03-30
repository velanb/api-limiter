const express = require('express');
const router = express.Router()

//Import validators 
const {
  createUserValidator,
  generateTokenValidator
} = require('./validators')

//Import controllers
const {
  createUserController,
  generateTokenController
} = require('./controllers')

router.route('/create').post([createUserValidator, createUserController]);

router.route('/gentoken').get([generateTokenValidator, generateTokenController])

module.exports = router;