const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

// AUTH
app.use('/api/auth', require('./routes/api/auth/auth'));

// USER
app.use('/api/users', require('./routes/api/users/users'));

// REVIEW


module.exports = app;