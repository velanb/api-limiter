const User = require("./models");
const { validationResult } = require("express-validator");

exports.generateToken = async (req, res, next) => {
  // Should as for the username and password and return a json containing the token
  // The validity of the token is forever by default however the user can modify it using the headers\
};

exports.createUser = async (req, res, next) => {
  // Only the admin can create a user
  // The admin- token would be required to handle this service
  try {
    let errors = await validationResult(req);
    if (!errors.isEmpty()) {
      return { errors: errors.array() };
    }
    let user = await User.where({ email: req.body.email }).findOne();
    if (!user) {
      user = await User.create({
        userName: req.body.username,
        email: req.body.email,
        password: "test"
      });
    }
  } catch (error) {}
};
