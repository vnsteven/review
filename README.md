# review-app [![Build Status](https://travis-ci.com/vnsteven/review.svg?token=DqpoLj6G47n3mCsLE5Mf&branch=master)](https://travis-ci.com/vnsteven/review)

An application for sending movies and series reviews to your friends. The work is in progress and will be a PWA. Test it out [here](https://review-up.herokuapp.com/).

## Features

- Authentication
- Search for a movie
- Send it to another user

## Documentation

This REST API has been built with NodeJS.

### Model

This app is based on a single User model using [TMDb API](https://developers.themoviedb.org/3/getting-started/introduction).

```javascript
const UserSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true
  }
);
```

### API

#### Auth

| Request methods | Route     | Description                         |
| --------------- | --------- | ----------------------------------- |
| GET             | api/auth/ | Get authenticated user              |
| POST            | api/auth  | Authenticate a user and get a token |

## Build with

### Front

- React
- Redux
- Material UI

### Back

- Node
- Express
- MongoDB

### Testing

- Jest
- Supertest

### DevOps

- Travis CI
