# review-app [![Build Status](https://travis-ci.com/vnsteven/review.svg?token=DqpoLj6G47n3mCsLE5Mf&branch=master)](https://travis-ci.com/vnsteven/review)

An application for sending movie reviews to your friends.<br />
The work is in progress and will be a PWA. <br />
Test it out [here](https://review-up.herokuapp.com/).

## Features

- Authentication
- Search for a movie
- Send it to another user or to yourself

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

| Request methods | Routes    | Descriptions                        | Access  |
| --------------- | --------- | ----------------------------------- | ------- |
| GET             | api/auth/ | Get authenticated user              | Private |
| POST            | api/auth  | Authenticate a user and get a token | Public  |

#### User

| Request methods | Routes    | Descriptions    | Access  |
| --------------- | --------- | --------------- | ------- |
| POST            | api/users | Register a user | Public  |
| GET             | api/users | Get all users   | Private |

#### Inbox

A user receives the reviews from his friends directly into his Inbox and can accept or refuse it. <br />
If accepted, it goes to the `reviews` field.

| Request methods | Routes                   | Descriptions            | Access  |
| --------------- | ------------------------ | ----------------------- | ------- |
| POST            | api/users/inbox/:user_id | Send a review to a user | Private |
| GET             | api/user/inbox           | Get auth user inbox     | Private |
| DELETE          | api/user/inbox/:inbox_id | Refuse a review         | Private |

#### Reviews

All accepted reviews.

| Request methods | Routes                      | Descriptions                                                                                | Access  |
| --------------- | --------------------------- | ------------------------------------------------------------------------------------------- | ------- |
| POST            | api/user/reviews/:inbox_id  | Accept a review in the inbox (get inbox info and create an new object in the reviews field) | Private |
| GET             | api/user/reviews            | Get reviews by auth user                                                                    | Private |
| DELETE          | api/user/reviews/:review_id | Delete a review by review id                                                                | Private |

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
- Heroku
