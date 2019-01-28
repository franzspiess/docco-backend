const express = require('express');

const router = express.Router();

/* POST negotiation */
router.post('/', (req, res, next) => {
  res.status(201);
});

module.exports = router;
