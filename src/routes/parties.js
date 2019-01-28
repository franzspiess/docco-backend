const express = require('express');

const router = express.Router();

router.post('/create', (req, res, next) => {
  res.sendStatus(201);
});

router.post('/add-parties', (req, res, next) => {
  res.sendStatus(201);
});

router.get('/:party-id', (req, res, next) => {
  res.sendStatus(200);
});

module.exports = router;
