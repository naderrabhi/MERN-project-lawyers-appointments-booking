const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  lawyerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  image: { type: String, required: true},
  address: { type: String, required: true},
  bio: { type: String, required: true},
  phone: { type: String, required: true},
  facebook: String,
  linkedin: String,
  instagram: String,
  specialty: String,
  name: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Profile = mongoose.model("profile", profileSchema);
