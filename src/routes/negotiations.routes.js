const router = require('express').Router();

module.exports = (controller) => {
  router.get('/:negotiationId', controller.getOne);
  router.post('/', controller.create);
  router.get('/', controller.getAll);
  return router;
};
