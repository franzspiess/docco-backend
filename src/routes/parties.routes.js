const router = require('express').Router();
const Parties = require('../controllers/parties.controller');

module.exports = (model) => {
  const partiesController = new Parties(model);
  router.post('/', partiesController.createParty); // Route: creates new parties
  router.get('/:partyId', partiesController.getPartyDetails); // Route: Gets details for an individual party based on provided 'party-id'
  return router;
};
