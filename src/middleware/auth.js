// current token is being used in the controllers as the logged in parties ID.
// Authentication will need to provide such a token, but will also need to deal
// with edge cases where party isn't logged in yet (like create party)
const { Party } = require('../models');
// Todo: install and use Redis instead of currentlyLoggedParties
const currentlyLoggedParties = {}; // { token : "partyId" }

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  const receivedToken = authorization.split(' ');
  if (receivedToken.length < 2) {
    res.status(403).send('invalid Token 🧨');
    return;
  }
  const token = receivedToken[1];

  if (token in currentlyLoggedParties) {
    req.partyId = currentlyLoggedParties.token;
    next();
  }

  const party = await Party.findOne({ where: { token } });

  if (party) {
    req.partyId = party.id;
    currentlyLoggedParties[party.token] = party.id;
    next();
  } else {
    res.status(403).send('invalid Token 🧨');
  }
};
