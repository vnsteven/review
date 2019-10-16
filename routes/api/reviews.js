const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const User = require('../../models/User');

router.post('/:inbox_id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { reviews, inbox } = user;
    const inboxItem = inbox.find(el => el.id.toString() === req.params.inbox_id);
    const index = inbox.indexOf(inboxItem);

    if (!inboxItem) throw new Error();

    reviews.unshift(inboxItem);
    inbox.splice(index, 1);

    await user.save();

    res.json(reviews);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
})

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { reviews } = user;
    res.json(reviews);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
})

router.delete('/:review_id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { reviews } = user;
    const review = reviews.find(el => el.id.toString() === req.params.review_id);
    const index = reviews.indexOf(review);

    if (!review) throw new Error();

    reviews.splice(index, 1);

    await user.save();

    res.send(reviews);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
})

module.exports = router;