const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  userId: {
    type: Number,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

let adminTracker = new Schema({
  userIdCounter: {
    type: Number,
    default: 0
  },
  clientCounter: {
    type: Number,
    default: 0
  }
})

exports.UserModel = mongoose.model("User", UserSchema);

exports.adminTrackerModel = mongoose.model('AdminTracker', adminTracker);