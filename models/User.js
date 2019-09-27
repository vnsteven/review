const mongoose = require('mongoose');

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
});

module.exports = User = mongoose.model('user', UserSchema);