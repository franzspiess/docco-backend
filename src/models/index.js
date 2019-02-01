require('dotenv').config();

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize
  .authenticate()
  .then(() => {
    // eslint-disable-next-line
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    // eslint-disable-next-line
    console.error('Unable to connect to the database:', err);
  });

const Party = require('./parties.model')(Sequelize, sequelize);
const Negotiation = require('./parties.model')(Sequelize, sequelize);

module.exports = {
  Party,
  Negotiation,
};
