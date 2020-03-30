const {
  UserModel,
  adminTrackerModel
} = require("./models");

exports.checkExistingUser = async (email) => {
  return await UserModel.where({
    email: email
  }).findOne()
}

exports.createUser = async (obj) => {
  let adminData = await this.getAdminData();
  if (adminData == null) {
    adminData = await adminTrackerModel.create({
      userIdCounter: 0,
      clientCounter: 0
    })
  }
  obj.userId = adminData.userIdCounter + 1;
  await this.incrementUserId();
  return await UserModel.create(obj);
}

exports.getAdminData = async () => {
  let adminData = await adminTrackerModel.findOne();
  return adminData;
}

exports.incrementUserId = async () => {
  let adminData = await adminTrackerModel.findOne();
  adminData.userIdCounter++;
  return await adminTrackerModel.findByIdAndUpdate(adminData)

}

exports.fetchUserByEmail = async (email) => {
  return await UserModel.findOne({
    email: email
  })
}