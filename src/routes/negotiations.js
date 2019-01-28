const express = require('express');

const router = express.Router();
const mock = require('../__test__/__mock__/negotations.mock');

/* POST negotiation */
router.post('/', (req, res, next) => {
  res.status(201);
});

module.exports = router;
