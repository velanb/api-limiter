const User = require("./models");

//Import Utils 
const Utils = require('../../../helpers/Utils')

exports.generateToken = async (req, res, next) => {
  // Should as for the username and password and return a json containing the token
  // The validity of the token is forever by default however the user can modify it using the headers\
};

exports.createUser = async (username, email, password, isAdmin) => {
  // Only the admin can create a user
  // The admin- token would be required to handle this service
  try {
    let user = await User.where({
      email: email
    }).findOne();

    if (!user) {
      let hashPassword = await Utils.hashPassword(password)
      user = await User.create({
        userName: username,
        email: email,
        password: hashPassword,
        isAdmin: isAdmin
      });
      let spreadObj = Object.freeze({
        success: true,
        status: 201,
        message: `User Created Successfully ->`,
        data: user
      })
      return spreadObj;
    }
  } catch (error) {
    throw error
  }
};