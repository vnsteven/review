const mongoose = require('mongoose');
const User = require('../../models/User');

const userOne = {
  _id: new mongoose.Types.ObjectId(),
  name: 'John',
  phonenumber: '0123452304',
  password: 'foobar',
  reviews: [
    {
      _id: new mongoose.Types.ObjectId(),
      title: 'Movie',
      description: 'Random description'
    }
  ],
  inbox: [
    {
      _id: new mongoose.Types.ObjectId(),
      title: 'Movie',
      description: 'Random description'
    }
  ]
}

const userTwo = {
  _id: new mongoose.Types.ObjectId(),
  name: 'Jane',
  phonenumber: '0123456789',
  password: 'foobar'
}

const setupDatabase = async () => {
  await User.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
}

module.exports = {
  userOne,
  userTwo,
  setupDatabase
}