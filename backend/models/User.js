const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: false,

  },
  password: {
    type: String,
    required: true,
  },

  dob: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = {
  User,
};
