const Parties = require('../../src/controllers/parties.controller');

const mock = require('../__mock__/parties.controller.mock');

const partiesController = new Parties(mock.model);

describe('Controller: createParty', async () => {
  test('It should respond with a status of 201', async () => {
    await partiesController.createParty(mock.req, mock.res);
    expect(mock.res.status).toHaveBeenCalledWith(201);
  });
});

describe('Controller: getPartyDetails', () => {
  test('It should respond with a status of 200', async () => {
    await partiesController.getPartyDetails(mock.req, mock.res);
    expect(mock.res.status).toHaveBeenCalledWith(200);
  });
  test('It should send back an object with property id === 1', async () => {
    await partiesController.getPartyDetails(mock.req, mock.res);
    expect(mock.res.findByPk).toHaveBeenCalledWith(
      { id: 1 },
    );
  });
});