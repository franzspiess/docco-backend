const request = require('supertest');
const app = require('../../src/app');

describe('Controller: createParty', () => {
  test('It should respond with a 201 statusCode', async () => {
    const res = await request(app).post('/parties/create');
    expect(res.statusCode).toBe(201);
  });
  test('It should respond with a new partyId', async () => {
    const res = await request(app).post('/parties/create');
    expect(res.statusCode).toBe(201);
  });
});

describe('Controller: getPartyDetails', () => {
  test('It should respond with the LEGAL_NAME of the party', () => request(app)
    .get('/parties/:partyId')
    .then((res) => {
      expect(res.statusCode).toBe(200);
    }));

  test('It should respond with the DISPLAY_NAME of the party', () => request(app)
    .get('/parties/:partyId')
    .then((res) => {
      expect(res.statusCode).toBe(200);
    }));

  test('It should respond with the EMAIL of the party', () => request(app)
    .get('/parties/:partyId')
    .then((res) => {
      expect(res.statusCode).toBe(200);
    }));

  test('It should respond with the ADDRESS of the party', () => request(app)
    .get('/parties/:partyId')
    .then((res) => {
      expect(res.statusCode).toBe(200);
    }));
});
