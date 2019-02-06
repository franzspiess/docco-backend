const router = require('express').Router();
const auth = require('../middleware/auth');

module.exports = controller => {
  router.post('/', controller.create); // Route: creates a new party
  router.post('/login/', controller.login); // Route: logs in a party (there are no users currently ... party = user)
  router.get('/email/:email', auth, controller.getPartyDetailsByEmail); // Route: Gets details for an individual party based on provided query 'email'
  router.get('/id/:partyId', auth, controller.getPartyDetailsById); // Route: Gets details for an individual party based on provided 'party-id'
  return router;
};
