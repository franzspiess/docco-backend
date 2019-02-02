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
const Negotiation = require('./negotiations.model')(Sequelize, sequelize);
const Version = require('./versions.model')(Sequelize, sequelize);

Negotiation.belongsTo(Party, { as: 'aDetails', foreignKey: 'partyA' });
Negotiation.belongsTo(Party, { as: 'bDetails', foreignKey: 'partyB' });
Negotiation.belongsTo(Version, { as: 'aContent', foreignKey: 'latestVersionA' });
Negotiation.belongsTo(Version, { as: 'bContent', foreignKey: 'latestVersionB' });

module.exports = {
  Party,
  Negotiation,
  Version,
};
