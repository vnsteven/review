const request = require('supertest');
const app = require('../app');
const {
  user,
  setupDatabase
} = require('./fixtures/db');

beforeEach(setupDatabase);
let token;

describe('User Authentication', () => {
  it('Should sign up a new user', async () => {
    await request(app)
      .post('/api/users')
      .send({
        name: 'John',
        phonenumber: '0612345902',
        password: 'foobar'
      })
      .expect(200)
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
})