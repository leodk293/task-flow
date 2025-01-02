const express = require('express');
const router = express.Router();

const {
    createUser,
    getAllUser
} = require('../controllers/user.controller.js');

router.get('/', getAllUser);
router.post('/', createUser);

module.exports = router;