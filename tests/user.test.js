const request = require('supertest');
const mongoose = require('mongoose');
const User = require('../models/User');
const app = require('../app');
const {
  user,
  setupDatabase
} = require('./fixtures/db');

beforeEach(setupDatabase);
afterAll(() => mongoose.disconnect());
let token;

describe('User Authentication', () => {
  it('Should sign up a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: 'John',
        phonenumber: '0612345902',
        password: 'foobar'
      })
      .expect(200)

    const user = await User.findById(res.body.user._id);
    expect(user).not.toBeNull()

    expect(res.body).toMatchObject({
      user: {
        name: 'John',
        phonenumber: '0612345902'
      },
      token: res.body.token
    })
  })

  it('Should sign in a existing user', async () => {
    const res = await request(app)
      .post('/api/auth')
      .send({
        name: user.name,
        password: 'foobar'
      })
      .expect(200)

    token = res.body.token;
  })
})

describe('Get User', () => {
  it('Should get authenticated user', async () => {
    await request(app)
      .get('/api/auth')
      .set('x-auth-token', token)
      .expect(200)
  })

  it('Should get all users', async () => {
    await request(app)
      .get('/api/users')
      .set('x-auth-token', token)
      .expect(200)
  })
})

describe('Inbox', () => {
  it('Should send a review to a user', async () => {
    await request(app)
      .post(`/api/users/inbox/${user._id}`)
      .set('x-auth-token', token)
      .send({
        'title': 'Movie',
        'description': 'A random description'
      })
      .expect(200)
  })

  it('Should get inbox of auth user', async () => {
    await request(app)
      .get('/api/users/inbox')
      .set('x-auth-token', token)
      .expect(200)
  })

  it('Should delete an inbox element', async () => {
    await request(app)
      .delete(`/api/users/inbox/${user.inbox[0]._id}`)
      .set('x-auth-token', token)
      .expect(200)
  })
})

describe('Reviews', () => {
  it('Should create a review from an inbox element', async () => {
    await request(app)
      .post(`/api/users/reviews/${user.inbox[0]._id}`)
      .set('x-auth-token', token)
      .expect(200)
  })

  it('Should get reviews by auth user', async () => {
    await request(app)
      .get('/api/users/reviews')
      .set('x-auth-token', token)
      .expect(200)
  })

  it('Should delete a review', async () => {
    await request(app)
      .delete(`/api/users/reviews/${user.reviews[0]._id}`)
      .set('x-auth-token', token)
      .expect(200)
  })
})