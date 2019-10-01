const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwtSecret = process.env.JWT_SECRET || config.get('jwtSecret');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  reviews: [
    {
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  ],
  inbox: [
    {
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  ]
}, {
  timestamps: true
});

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = await jwt.sign(
    { _id: user._id.toString() },
    jwtSecret,
    { expiresIn: 360000 }
  );
  return token;
};

UserSchema.statics.findByCredentials = async (name, password) => {
  const user = await User.findOne({ name });

  if (!user) {
    throw new Error('Invalid Credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Invalid Credentials');
  }

  return user;
};

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = await jwt.sign(
    { _id: user._id.toString() },
    jwtSecret,
    { expiresIn: 360000 }
  );
  return token;
};

module.exports = User = mongoose.model('user', UserSchema);