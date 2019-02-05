const router = require('express').Router();
const auth = require('../middleware/auth');

module.exports = (controller) => {
  router.post('/', auth, controller.create);
  router.post('/publish/:negotiationId', auth, controller.publish);
  router.get('/:negotiationId', auth, controller.getOne);
  router.get('/', auth, controller.getAll);
  return router;
};
