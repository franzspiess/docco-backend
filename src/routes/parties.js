const router = require('express').Router();
const PartiesController = require('../controllers/parties.controller');

const PartiesDB = require('../models/parties.model'); // Database

const parties = new PartiesController(PartiesDB);

router.post('/', parties.createParty); // Route: creates new parties
router.get('/:partyId', parties.getPartyDetails); // Route: Gets details for an individual party based on provided 'party-id'

module.exports = router;
