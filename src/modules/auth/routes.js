const express = require('express');
const router = express.Router()

//Import validators 
const {
  userValidator
} = require('./validators')

//Import controllers
const {
  createUserController
} = require('./controllers')

router.route('/create').all(userValidator).post(createUserController);




module.exports = router;