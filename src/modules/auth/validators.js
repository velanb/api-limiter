const {
  body,
  check
} = require("express-validator");

const Utils = require('../../../helpers/Utils.js');

exports.createUserValidator = [
  check("username").isAlpha(),
  check("email").isEmail(),
  check("password")
  .isLength({
    min: 6
  })
];

exports.generateTokenValidator = [
  check("email").isEmail().withMessage(`Please enter valid email`),
  check("password").isLength({
    min: 6
  }).withMessage(`Please enter valid email and password`)
]

exports.validateCredentials = async (userObj, password) => {
  try {
    let verfiyPassword = await Utils.verifyPassord(userObj.password, password);
    return verfiyPassword;
  } catch (error) {
    throw error
  }
}