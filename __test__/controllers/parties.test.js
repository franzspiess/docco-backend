const Parties = require('../../src/controllers/parties.controller');

const mock = require('../__mock__/parties.controller.mock');

const partiesController = new Parties(mock.model);

describe('Controller: create a party', async () => {
  test('It should respond with a status of 201', async () => {
    await partiesController.create(mock.req, mock.res);
    expect(mock.res.status).toHaveBeenCalledWith(201);
  });
});

describe('Controller: getPartyDetailsById', () => {
  test('It should respond with a status of 200', async () => {
    await partiesController.getPartyDetailsById(mock.req, mock.res);
    expect(mock.res.status).toHaveBeenCalledWith(200);
  });
});

describe('Controller: getPartyDetailsByEmail', () => {
  test('It should respond with a status of 200', async () => {
    await partiesController.getPartyDetailsByEmail(mock.req, mock.res);
    expect(mock.res.status).toHaveBeenCalledWith(200);
  });
});
