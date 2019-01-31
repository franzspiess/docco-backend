const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { negotiationsRouter, partiesRouter } = require('./routes');
const { Party, Negotiation } = require('./models');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/parties', partiesRouter(Party));
app.use('/negotiations', negotiationsRouter(Negotiation));

module.exports = app;
