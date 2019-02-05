const express = require('express');

const app = express();
const cors = require('cors');

const path = require('path');
const logger = require('morgan');
const auth = require('./middleware/auth');
const Router = require('./routes');
const { Party, Negotiation, Version } = require('./models');
const PartiesController = require('./controllers/parties.controller');
const NegotiationsController = require('./controllers/negotiations.controller');

const partiesController = new PartiesController(Party);
const negotiationsController = new NegotiationsController(Negotiation, Version);

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(auth);

app.use('/', Router(partiesController, negotiationsController));
module.exports = app;
