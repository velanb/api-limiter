const {
  createUser
} = require('./services')

exports.createUserController = async (req, res, next) => {
  try {
    let {
      username,
      email,
      password,
      isAdmin
    } = req.body;

    let user = await createUser(username, email, password, isAdmin);
    let spreadObj = Object.assign({}, user)
    res.json(spreadObj);
  } catch (error) {
    throw error;
  }


}