const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

module.exports = app;