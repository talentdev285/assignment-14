
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  verificationToken: String,
  isVerified: Boolean,
});

module.exports = mongoose.model('User', userSchema);
