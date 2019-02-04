const router = require('express').Router();

module.exports = (controller) => {
  router.post('/', controller.createParty); // Route: creates a new party
  router.get('/email/:email', controller.getPartyDetailsByEmail); // Route: Gets details for an individual party based on provided query 'email'
  router.get('/id/:partyId', controller.getPartyDetailsById); // Route: Gets details for an individual party based on provided 'party-id'
  return router;
};
