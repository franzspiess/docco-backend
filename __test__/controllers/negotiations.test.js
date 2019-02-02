const mock = require('../__mock__/controllers.mock');
const Negotiations = require('../../src/controllers/negotiations.controller');

const model = {
  create: jest.fn(() => ({
    negotiation_id: 3,
    party_a: 23,
    party_b: 31,
    published_at: '2016-08-05T08:40:51.620Z',
  })),
};

const req = {
  body: mock.newNegotiation,
};

const res = {
  status: jest.fn(function status() {
    return this;
  }),
  send: jest.fn(),
};

const negotiations = new Negotiations(model);

describe('Create Negotiation', () => {
  test('It should return a confirmation', async () => {
    await negotiations.create(req, res);
    expect(model.create).toHaveBeenCalledTimes(1); // Behavioural is better for integration
    expect(res.status).toHaveBeenCalledWith(201);
  });
});
