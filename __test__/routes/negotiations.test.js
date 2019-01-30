const request = require('supertest');
const app = require('../../src/app');

describe('Route: /negotiations/:negotiation-id', () => {
  const negotiationId = 1;
  test('It should respond a GET with 200', async () => {
    const res = await request(app).get(`/negotiations/${negotiationId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe(200);
  });
});

describe('Route: /negotiations/all', () => {
  test('It should respond a GET with 200', async () => {
    const res = await request(app).get('/negotiations/all');
    expect(res.statusCode).toBe(200);
  });
});

describe('Route: /negotiations/create', () => {
  test('It should respond a POST with 201', async () => {
    const res = await request(app).post('/negotiations/create');
    expect(res.statusCode).toBe(201);
  });
});
