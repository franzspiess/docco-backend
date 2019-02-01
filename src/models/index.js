require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

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
