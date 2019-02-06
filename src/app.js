const express = require('express');
require('dotenv').config();


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
const negotiationsController = new NegotiationsController(Negotiation, Party, Version);

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(auth);

app.use('/', Router(partiesController, negotiationsController));


module.exports = app;

// const accountSid = 'AC56d0e44ca10f7f729f17e9ac5c270d60';
// const authToken = process.env.TWILIO_TOKEN; // Your Auth Token from www.twilio.com/console
// console.log(process.env);

// const Twilio = require('twilio');

// const client = new Twilio(accountSid, authToken);

// client.messages.create({
//   body: 'Hello from Node',
//   to: '+436641838282', // Text this number
//   from: '+43676800555338', // From a valid Twilio number
// })
//   .then(message => console.log(message.sid))
//   .done();
