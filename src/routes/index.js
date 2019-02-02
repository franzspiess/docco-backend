const router = require('express').Router();
const partiesRouter = require('./parties.routes');
const negotiationsRouter = require('./negotiations.routes');

module.exports = (partiesController, negotiationsController) => {
  router.use('/parties/', partiesRouter(partiesController));
  router.use('/negotiations/', negotiationsRouter(negotiationsController));
  return router;
};
