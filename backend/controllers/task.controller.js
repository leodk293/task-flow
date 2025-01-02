const Task = require('../modules/task.module.js');

async function getAllTask(req, res) {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

async function createTask(req, res) {
    try {
        const { title, description, priority } = req.body;
        const user = await User.findById(req.user.id);
        const newTask = new Task({
            title,
            description,
            priority,
            user: user.id
        });
        const task = await newTask.save();
        user.tasks.push(task.id);
        await user.save();
        res.status(201).json(task);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }

};

async function updateTask(req, res) {
    try {
        const { title, description, priority } = req.body;
        const task = await Task.findById(req.params.id);
        if (task.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }
        task.title = title;
        task.description = description;
        task.priority = priority;
        await task.save();
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }

}

async function deleteTask(req, res) {
    try {
        const task = await Task.findById(req.params.id);
        if (task.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }
        await task.remove();
        res.status(200).json({ message: 'Task deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }

}

module.exports = {
    getAllTask,
    createTask,
    updateTask,
    deleteTask
};