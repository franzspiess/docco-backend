// current token is being used in the controllers as the logged in parties ID.
// Authentication will need to provide such a token, but will also need to deal
// with edge cases where party isn't logged in yet (like create party)


module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  const [, token] = authorization.split(' ');

  if (token in currentlyLoggedParties) {
    req.partyId = currentlyLoggedParties.bearerToken;
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
