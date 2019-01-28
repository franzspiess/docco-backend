const express = require('express');

const router = express.Router();

router.get('/:negotiationId', (req, res) => {
  const { negotiationId } = req.params;
  res.send(`GET request to negotiations/${negotiationId}`);
  res.sendStatus(201);
});

router.get('/all', (req, res) => {
  res.sendStatus(200);
});

router.post('/create', (req, res) => {
  res.sendStatus(201);
});

module.exports = router;
