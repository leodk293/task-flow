"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../controllers/user.controller.js'),
    createUser = _require.createUser,
    getAllUser = _require.getAllUser;

router.get('/', getAllUser);
router.post('/', createUser);
module.exports = router;