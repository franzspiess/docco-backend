const express = require('express');

const router = express.Router();

const Negotiations = require('../controllers/negotiations.controller');

module.exports = (model) => {
  const negotiationController = new Negotiations(model);

  // Get one
  router.get('/:negotiationId', (req, res) => {
    res.sendStatus(200);
  });

  // Get all
  router.get('/', (req, res) => {
    res.sendStatus(200);
  });

  // Add Parties
  router.post('/:negotiationId/parties', (req, res) => {
    res.sendStatus(201);
  });

  // Publish amendment
  router.post('/:negotiationId', (req, res) => {
    res.sendStatus(201);
  });

  // Create negotiation
  router.post('/', (req, res) => {
    const { negotiation } = req.body;
    const response = negotiationController.create(negotiation);
    res.send(response);
    res.status(201);
  });
};
