const express = require('express');
const contract = require('../../__test__/__mock__/contract.mock.json');

const router = express.Router();

router.get('/:negotiationId', (req, res) => {
  const { negotiationId } = req.params;
  res.status(200).send(contract);
});

router.get('/all', (req, res) => {
  res.sendStatus(200);
});

router.post('/create', (req, res) => {
  res.sendStatus(201);
});

module.exports = router;
