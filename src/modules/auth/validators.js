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
    let verfiyPassword = await Utils.verifyPassord(password, userObj.password);
    console.log(verfiyPassword)

    return verfiyPassword;
  } catch (error) {
    throw error
  }
}