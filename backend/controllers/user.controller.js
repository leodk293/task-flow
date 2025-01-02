const User = require('../modules/user.module.js');

async function getAllUser(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

async function createUser(req, res) {
    try {
        const { name, email } = req.body;
        const newUser = new User({
            name,
            email
        });
        const user = await newUser.save();
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }

};

module.exports = {
    getAllUser,
    createUser
};