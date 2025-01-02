const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: { 
    type: String, 
    required: true, 
    unique: true // Ensures each Google account is stored once 
  },
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('User', UserSchema);