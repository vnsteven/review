const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../../../models/User');

// @route  POST api/user
// @desc   Register a user
// @access Public
router.post(
  '/',
  [
    check('name', 'Veuillez rentrer un nom valide')
      .not()
      .isEmpty(),
    check('phonenumber', 'Veuillez rentrer un numéro valide')
      .isLength({
        min: 10,
        max: 10
      }),
    check('password', 'Veuillez rentrer un mot de passe valide')
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

      await user.save();

      const token = await user.generateAuthToken();

      res.json({ token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
)

module.exports = router;