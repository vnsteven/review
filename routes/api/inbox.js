const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const User = require('../../models/User');

router.post('/:user_id', auth, async (req, res) => {
  const { title, description } = req.body;

  try {
    const user = await User.findById(req.params.user_id);
    const { inbox } = user;
    const newInbox = {
      sender: req.user.id,
      title,
      description
    }

    inbox.unshift(newInbox);

    await user.save();

    res.json(inbox);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
})

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.inbox);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
})

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