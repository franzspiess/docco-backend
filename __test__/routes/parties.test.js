const request = require('supertest');
const app = require('../../src/app');

describe('Route: parties/create', () => {
  test('It should respond with a 201', async () => {
    const res = await request(app).post('/parties/create');
    expect(res.statusCode).toBe(201);
  });
});

describe('Route: parties/add-parties', () => {
  test('It should respond a 200', () => request(app)
    .post('/parties/add-parties')
    .then((res) => {
      expect(res.statusCode).toBe(201);
    }));
});

describe('Route: parties/:partiesId', () => {
  test('It should respond a 200', () => request(app)
    .get('/parties/:partyId')
    .then((res) => {
      expect(res.statusCode).toBe(200);
    }));
});
