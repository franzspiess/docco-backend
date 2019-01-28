const request = require('supertest');
const app = require('../../app');

describe('/negotiations/create', () => {
  test('It should respond a 201', () => request(app)
    .get('/negotiations/create')
    .then((res) => {
      expect(res.statusCode).toBe(201);
    }));

  test('Request should have the desired properties', () => request(app)
    .get('/negotiations/create')
    .then((res) => {
      expect(res.statusCode).toBe(201);
    }));
});
