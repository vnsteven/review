const mongoose = require('mongoose');
const User = require('../../models/User');

const user = {
  _id: new mongoose.Types.ObjectId(),
  name: 'John',
  phonenumber: '0123452304',
  password: 'foobar'
}

const setupDatabase = async () => {
  await User.deleteMany();
  await new User(user).save();
}

module.exports = {
  user,
  setupDatabase
}