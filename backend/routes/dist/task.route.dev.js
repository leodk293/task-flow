"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../controllers/task.controller.js'),
    createTask = _require.createTask,
    getAllTask = _require.getAllTask,
    updateTask = _require.updateTask,
    deleteTask = _require.deleteTask;

router.get('/', getAllTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router["delete"]('/:id', deleteTask);
module.exports = router;