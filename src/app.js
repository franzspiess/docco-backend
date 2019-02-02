const express = require('express');
const path = require('path');
const logger = require('morgan');
const Router = require('./routes');
const { Party, Negotiation } = require('./models');
const PartiesController = require('./controllers/parties.controller');
const NegotiationsController = require('./controllers/negotiations.controller');

const partiesController = new PartiesController(Party);
const negotiationsController = new NegotiationsController(Negotiation);


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', Router(partiesController, negotiationsController));
module.exports = app;
