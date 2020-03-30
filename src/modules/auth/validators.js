const {
  body,
  check
} = require("express-validator");

exports.createUserValidator = [
  check("username").isAlpha(),
  check("email").isEmail(),
  check("password")
  .isLength({
    min: 6
  })
];