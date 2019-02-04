// current token is being used in the controllers as the logged in parties ID.
// Authentication will need to provide such a token, but will also need to deal
// with edge cases where party isn't logged in yet (like create party)
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(403).send('Invalid Token');
  const [, token] = authorization.split(' ');
  req.token = Number(token); // the token must be a number
  next();
  return this;
};
