const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route  POST api/user/reviews/:inbox_id
// @desc   Accept a review in the inbox
// @access Private
router.post('/:inbox_id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { reviews, inbox } = user;
    const inboxItem = inbox.find(el => el.id.toString() === req.params.inbox_id);
    const index = inbox.indexOf(inboxItem);

    reviews.unshift(inboxItem);
    inbox.splice(index, 1);

    await user.save();

    res.json(reviews);
  } catch (error) {
    console.error(error.messages);
    res.status(500).send('Server error');
  }
})

// @route  GET api/user/reviews
// @desc   Get reviews by auth user 
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { reviews } = user;
    res.json(reviews);
  } catch (error) {
    console.error(error.messages);
    res.status(500).send('Server error');
  }
})

// @route  DELETE api/user/reviews/:review_id
// @desc   Delete a review by review id
// @access Private
router.delete('/:review_id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { reviews } = user;
    const review = reviews.find(el => el.id.toString() === req.params.review_id);
    const index = reviews.indexOf(review);

    reviews.splice(index, 1);

    await user.save();

    res.send(reviews);
  } catch (error) {
    console.error(error.messages);
    res.status(500).send('Server error');
  }
})

module.exports = router;