const express = require('express');
const dotevn = require('dotenv');
dotevn.config({});
const userRouter = require('./routes/users');
const contactRouter = require('./routes/contact');
const authRouter = require('./routes/auth');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use('/api/users', userRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/auth', authRouter);
const PORT = 5000;

app.listen(PORT, () => console.log(`Sever is running on ${PORT}`));
