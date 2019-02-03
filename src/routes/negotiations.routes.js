const router = require('express').Router();

module.exports = (controller) => {
  router.post('/', controller.create);
  router.post('/publish/:negotiationId', controller.publish);
  router.get('/:negotiationId', controller.getOne);
  router.get('/', controller.getAll);
  return router;
};
