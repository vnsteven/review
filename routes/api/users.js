const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const auth = require('../../middleware/auth');
const User = require('../../models/User');

router.post(
  '/',
  [
    check('name', 'Please enter a valid name')
      .not()
      .isEmpty(),
    check('phonenumber', 'Please enter a valid phone number')
      .isLength({
        min: 10,
        max: 10
      }),
    check('password', 'Please enter a valid password')
      .isLength({
        min: 6
      })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors) {
      return res
        .status(400)
        .json({ errors: errors.array() })
    }

    const { name, phonenumber, password } = req.body;

    try {
      let user = await User.findOne({ phonenumber });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        name,
        phonenumber,
        password
      })

      user.password = await bcrypt.hash(user.password, 10);

      await user.save();

      const token = await user.generateAuthToken();

      res.json({ token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
)

router.get('/', auth, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
})

module.exports = router;