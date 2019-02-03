const router = require('express').Router();

module.exports = (controller) => {
  router.post('/', controller.createParty); // Route: creates new parties
  router.get('/:partyId', controller.getPartyDetails); // Route: Gets details for an individual party based on provided 'party-id'
  return router;
};
