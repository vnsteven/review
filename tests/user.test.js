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

// USER
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

    const usr = await User.findById(res.body.user._id);
    expect(usr).not.toBeNull()

    expect(res.body).toMatchObject({
      user: {
        name: 'John',
        phonenumber: '0612345902'
      },
      token: res.body.token
    })
  })

  it('Should not sign up a user with invalid infos', async () => {
    await request(app)
      .post('/api/users')
      .send({
        name: 'hey',
        phonenumber: '0123',
        password: 'foo'
      })
      .expect(400)
  })

  it('Should not sign up a user with no infos', async () => {
    await request(app)
      .post('/api/users')
      .send({
        name: '',
        phonenumber: '',
        password: ''
      })
      .expect(400)
  })

  it('Should not sign up a user with the same phone number', async () => {
    await request(app)
      .post('/api/users')
      .send({
        name: 'Roger',
        phonenumber: user.phonenumber,
        password: 'foobar'
      })
      .expect(400)
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

it('Should not sign in a non existing user', async () => {
  await request(app)
    .post('/api/auth')
    .send({
      name: 'Johnny',
      password: 'foobar'
    })
    .expect(400)
})

// MIDDLEWARE
describe('Middleware token test', () => {
  it('Should not get authenticated user with wrong token', async () => {
    await request(app)
      .get('/api/auth')
      .set('x-auth-token', 'wrong token')
      .expect(401)
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

// INBOX
describe('Inbox', () => {
  it('Should send a review to an existing user', async () => {
    await request(app)
      .post(`/api/users/inbox/${user._id}`)
      .set('x-auth-token', token)
      .send({
        'title': 'Movie',
        'description': 'A random description'
      })
      .expect(200)
  })

  it('Should not send to a non existing user', async () => {
    await request(app)
      .post(`/api/users/inbox/1234`)
      .set('x-auth-token', token)
      .send({
        'title': 'Movie',
        'description': 'A random description'
      })
      .expect(500)
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

  it('Should not delete a non existing inbox element', async () => {
    await request(app)
      .delete('/api/users/inbox/1234')
      .set('x-auth-token', token)
      .expect(500)
  })
})

// REVIEWS
describe('Reviews', () => {
  it('Should create a review from an inbox element', async () => {
    await request(app)
      .post(`/api/users/reviews/${user.inbox[0]._id}`)
      .set('x-auth-token', token)
      .expect(200)
  })

  it('Should not create a review from a non existing inbox element', async () => {
    await request(app)
      .post('/api/users/reviews/1234')
      .set('x-auth-token', token)
      .expect(500)
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

  it('Should delete an existing review', async () => {
    await request(app)
      .delete('/api/users/reviews/1234')
      .set('x-auth-token', token)
      .expect(500)
  })
})