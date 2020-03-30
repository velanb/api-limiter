const {
  checkExistingUser,
  createUser,
  fetchUserByEmail
} = require('./repositories')
//Import Utils 
const Utils = require('../../../helpers/Utils')

//Import Validators
const {
  validateCredentials
} = require('./validators')

exports.generateTokenService = async (email, password) => {
  // Should as for the username and password and return a json containing the token
  // The validity of the token is forever by default however the user can modify it using the headers
  try {
    let userStatus = await checkExistingUser(email);

    if (userStatus) {
      let userObj = await fetchUserByEmail(email);
      let verificationStatus = await validateCredentials(userObj, password);
      if (verificationStatus) {
        let token = await Utils.generateJWT({
          username: userObj.userName,
          id: userObj._id
        })
        let spreadObj = Object.freeze({}, {
          status: true,
          token: token
        })
        return spreadObj
      } else {
        let spreadObj = Object.freeze({}, {
          status: false,
          message: `Invalid username or password`
        })
        return spreadObj;
      }
    }
  } catch (error) {

  }
};

exports.createUser = async (username, email, password, isAdmin) => {
  // Only the admin can create a user
  // The admin- token would be required to handle this service
  try {
    let user = await checkExistingUser(email);

    if (!user) {
      let hashPassword = await Utils.hashPassword(password)
      let userObj = Object.assign({}, {
        userName: username,
        email: email,
        password: hashPassword,
        isAdmin: isAdmin
      })

      user = await createUser(userObj);

      let spreadObj = Object.freeze({
        success: true,
        message: `User Created Successfully`,
        data: user
      })
      return spreadObj;
    }
  } catch (error) {
    throw error
  }
};