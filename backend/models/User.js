const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  identifier: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  registration_type: { type: String, enum: ['phone', 'email'], required: true },
  type: { type: String, enum: ['Broker', ''], default: '' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);