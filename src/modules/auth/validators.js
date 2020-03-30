const { body } = require("express-validator");

exports.userValidator = [
  body("username").isAlpha(),
  body("email").isEmail(),
  body("password")
    .isLength({ min: 6 })
    .isAlphanumeric()
];
