const {
  createUser
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
      let spreadObj = Object.assign({}, {
        id: user.data._id,
        username: user.data.userName
      })
      res.json(spreadObj);
    }

  } catch (error) {
    throw error;
  }
}