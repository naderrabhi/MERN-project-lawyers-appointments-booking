const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordConfirm: {
    type: String,
  },
  role: {
    type: String,
    default: "client",
    enum: ["client", "lawyer", "admin"],
  },
  isHasProfile: {
    type: Boolean,
    default: false
  },
  specialty: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
},
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = User = mongoose.model("user", userSchema);
