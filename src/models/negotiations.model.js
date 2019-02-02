module.exports = (Sequelize, sequelize) => {
  const Negotiation = sequelize.define('Negotiation', {
    title: {
      type: Sequelize.CHAR,
      allowNull: false,
    },
    description: {
      type: Sequelize.CHAR,
      allowNull: true,
    },
    party_a: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    party_b: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    latest_version_a: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    latest_version_b: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    latest_proposer_a: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  });

  return Negotiation;
};
