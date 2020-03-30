const express = require('express');
const router = express.Router()

//Import validators 
const {
  createUserValidator
} = require('./validators')

//Import controllers
const {
  createUserController
} = require('./controllers')

router.route('/create').post([createUserValidator, createUserController]);




module.exports = router;