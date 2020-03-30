const {
  createUser,
  generateTokenService
} = require('./services')
const {
  validationResult
} = require("express-validator");

exports.createUserController = async (req, res, next) => {
  try {
    let {
      username,
      email,
      password,
      isAdmin
    } = req.body;

    let errors = await validationResult(req);
    if (!errors.isEmpty()) {
      res.json({
        errors: errors.array()
      });
    } else {
      let user = await createUser(username, email, password, isAdmin);
      let spreadObj = Object.assign({}, user)
      res.json(spreadObj);
    }

  } catch (error) {
    throw error;
  }
}

exports.generateTokenController = async (req, res, next) => {
  let {
    email,
    password
  } = req.body;

  try {
    let token = await generateTokenService(email, password)
    res.json(token);
  } catch (error) {
    throw error;
  }
}