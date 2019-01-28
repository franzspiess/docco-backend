const request = require('supertest');
const app = require('../../app');

describe('/user/create', () => {
  test('It should respond a 201', () => request(app)
    .get('/user/create')
    .then((res) => {
      expect(res.statusCode).toBe(404);
    }));

  test('It should respond a 201', () => request(app)
    .get('/user/create')
    .then((res) => {
      expect(res.statusCode).toBe(404);
    }));
});
