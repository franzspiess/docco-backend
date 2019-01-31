module.exports = (sequelize, Sequelize) => {
  const Negotiation = sequelize.define('Negotiation', {
    id: Sequelize.INTEGER,
    display_name: Sequelize.TEXT,
    description: Sequelize.TEXT,
    party_a: Sequelize.INTEGER,
    party_b: Sequelize.INTEGER,
    latest_version: Sequelize.INTEGER,
  });

  return Negotiation;
};
