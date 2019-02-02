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
const Negotiation = require('./negotiations.model')(Sequelize, sequelize);
const Version = require('./versions.model')(Sequelize, sequelize);

Negotiation.belongsTo(Party, { as: 'partyA', foreignKey: 'party_a' });
Negotiation.belongsTo(Party, { as: 'partyB', foreignKey: 'party_b' });
Negotiation.belongsTo(Version, { as: 'latestVersionA', foreignKey: 'latest_version_a' });
Negotiation.belongsTo(Version, { as: 'latestVersionB', foreignKey: 'latest_version_b' });

module.exports = {
  Party,
  Negotiation,
};
