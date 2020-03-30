const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  //   userId: {
  //     type: Number,
  //     required: true
  //   },
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

module.exports = mongoose.model("User", UserSchema);
