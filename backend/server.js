const express = require('express');
const dotenv = require('dotenv');

const { connectDB } = require('./config/db.js');

const taskRouter = require('./routes/task.route.js');
const userRouter = require('./routes/user.route.js');

dotenv.config({ path: '../.env' });


if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI is not defined in the .env file!');
    process.exit(1);
} else {
    console.log('MONGODB_URI loaded:', process.env.MONGODB_URI);
}
connectDB();

const app = express();
app.use(express.json());

app.use('/api/tasks', taskRouter);
app.use('/api/users', userRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
