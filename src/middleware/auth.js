module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(403).send('Invalid Token');
  const [, token] = authorization.split(' ');
  req.token = Number(token); // the token must be a number
  next();
};
