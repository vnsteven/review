const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/users/reviews', require('./routes/api/reviews'));
app.use('/api/users/inbox', require('./routes/api/inbox'));

module.exports = app;