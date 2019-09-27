const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../../models/User');

// @route  GET api/auth
// @desc   Get authenticated user
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route  POST api/auth
// @desc   Authenticate user and get token
// @access Private
router.post(
  '/',
  [
    check('name', 'Name is required').exists(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, password } = req.body;

    try {
      const user = await User.findByCredentials(name, password);
      const token = await user.generateAuthToken();
      res.json({ token, user });
    } catch (err) {
      console.error(err.message);
      res.status(400).send('Invalid Credentials');
    }
  }
);

module.exports = router;