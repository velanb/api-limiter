const User = require("./models");

exports.checkExistingUser = async (email) => {
  return await User.where({
    email: email
  }).findOne()
}

exports.createUser = async (obj) => {
  return await User.create(obj)
}

exports.fetchUserByEmail = async (email) => {
  return await User.findOne({
    email: email
  })
}