"use strict";

var express = require('express');

var dotenv = require('dotenv');

var _require = require('./config/db.js'),
    connectDB = _require.connectDB;

var taskRouter = require('./routes/task.route.js');

var userRouter = require('./routes/user.route.js');

dotenv.config({
  path: '../.env'
});

if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI is not defined in the .env file!');
  process.exit(1);
} else {
  console.log('MONGODB_URI loaded:', process.env.MONGODB_URI);
}

connectDB();
var app = express();
app.use(express.json());
app.use('/api/tasks', taskRouter);
app.use('/api/users', userRouter);
var PORT = process.env.PORT || 5001;
app.listen(PORT, function () {
  console.log("Server started at http://localhost:".concat(PORT));
});