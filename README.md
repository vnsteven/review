# review-app

[![Build Status](https://travis-ci.com/vnsteven/review.svg?token=DqpoLj6G47n3mCsLE5Mf&branch=master)](https://travis-ci.com/vnsteven/review)
[![Coverage Status](https://coveralls.io/repos/github/vnsteven/review/badge.svg)](https://coveralls.io/github/vnsteven/review)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![eslint: airbnb](https://img.shields.io/badge/eslint-airbnb-%23fd5c63.svg)](https://www.npmjs.com/package/eslint-config-airbnb)

An application for sending movie reviews to your friends. <br />
The work is in progress and will be a PWA. <br />

## Getting started

```
// Clone the repo
git clone https://github.com/vnsteven/review

// Install npm packages on both client and server sides
$ npm install
$ cd client
$ npm install

// Start server
$ npm run server

// Start app (client and server)
$ npm run dev

// Testing
$ npm test
```

## Features

- Authentication
- Search for a movie
- Send it to another user or to yourself

## Documentation

This REST API has been built with NodeJS.

### Model

This app is based on a single User model using [TMDb API](https://developers.themoviedb.org/3/getting-started/introduction).

### API

#### Auth

| Request methods | Routes   | Descriptions                        | Access  |
| --------------- | -------- | ----------------------------------- | ------- |
| GET             | api/auth | Get authenticated user              | Private |
| POST            | api/auth | Authenticate a user and get a token | Public  |

#### User

| Request methods | Routes    | Descriptions    | Access  |
| --------------- | --------- | --------------- | ------- |
| POST            | api/users | Register a user | Public  |
| GET             | api/users | Get all users   | Private |

#### Inbox

A user receives the reviews from his friends directly into his Inbox and can accept or refuse it. <br />
If accepted, it goes to the `reviews` field.

| Request methods | Routes                    | Descriptions            | Access  |
| --------------- | ------------------------- | ----------------------- | ------- |
| POST            | api/users/inbox/:user_id  | Send a review to a user | Private |
| GET             | api/users/inbox           | Get auth user inbox     | Private |
| DELETE          | api/users/inbox/:inbox_id | Refuse a review         | Private |

#### Reviews

All accepted reviews.

| Request methods | Routes                       | Descriptions                                                                                | Access  |
| --------------- | ---------------------------- | ------------------------------------------------------------------------------------------- | ------- |
| POST            | api/users/reviews/:inbox_id  | Accept a review in the inbox (get inbox info and create an new object in the reviews field) | Private |
| GET             | api/users/reviews            | Get reviews by auth user                                                                    | Private |
| DELETE          | api/users/reviews/:review_id | Delete a review by review id                                                                | Private |

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
- Coveralls
- Heroku
