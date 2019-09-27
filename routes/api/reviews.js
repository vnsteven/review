const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route  POST api/user/reviews
// @desc   Create a review
// @access Private

// @route  DELETE api/user/inbox
// @desc   Get inbox auth user 
// @access Private

module.exports = router;