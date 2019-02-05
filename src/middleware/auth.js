// current token is being used in the controllers as the logged in parties ID.
// Authentication will need to provide such a token, but will also need to deal
// with edge cases where party isn't logged in yet (like create party)
const { Party } = require('../models');

module.exports = async (req, res, next) => {
  // Todo: install and use Redis instead of currentlyLoggedParties
  const currentlyLoggedParties = {}; // { bearerToken : "partyId" }
  const { authorization } = req.headers;
  const [, bearerToken] = authorization.split(' ');

  if (bearerToken in currentlyLoggedParties) {
    req.token = currentlyLoggedParties.bearerToken;
    next();
  }

  const party = await Party.findOne({ where: { token: bearerToken } });

  if (party) {
    req.token = party.id;
    currentlyLoggedParties[party.token] = party.id;
    next();
  } else {
    res.status(403).send('invalid Token 🧨');
  }
};
