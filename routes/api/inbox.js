const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route  POST api/user/inbox/:user_id
// @desc   Create a review
// @access Private
router.post('/:user_id', auth, async (req, res) => {
  const { title, description } = req.body;

  try {
    const user = await User.findById(req.params.user_id);

    user.inbox.unshift({ sender: req.user.id, title, description })

    await user.save();

    res.json(user.inbox);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
})

// @route  GET api/user/inbox
// @desc   Get inbox auth user 
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.inbox);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
})

// @route  DELETE api/user/inbox
// @desc   Get inbox auth user 
// @access Private
router.delete('/:inbox_id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { inbox } = user;
    const inboxItem = inbox.find(el => el.id.toString() === req.params.inbox_id);
    const index = inbox.indexOf(inboxItem);

    inbox.splice(index, 1);

    await user.save();

    res.json(inbox);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
})

module.exports = router;