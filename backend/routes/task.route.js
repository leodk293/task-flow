const express = require('express');
const router = express.Router();

const {
    createTask,
    getAllTask,
    updateTask,
    deleteTask
} = require('../controllers/task.controller.js');

router.get('/', getAllTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;