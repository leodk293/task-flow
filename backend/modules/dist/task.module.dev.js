"use strict";

var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  userGoogleId: {
    type: String,
    required: true,
    index: true // Speeds up queries for tasks by user

  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    "enum": ['Low', 'Medium', 'High'],
    // Enforces valid priorities
    required: true
  },
  createdAt: {
    type: Date,
    "default": Date.now
  },
  updatedAt: {
    type: Date
  }
});
module.exports = mongoose.model('Task', TaskSchema);