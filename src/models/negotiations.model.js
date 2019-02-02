module.exports = (Sequelize, sequelize) => {
  const Negotiation = sequelize.define('negotiation', {
    title: {
      type: Sequelize.CHAR,
      allowNull: false,
    },
    description: {
      type: Sequelize.CHAR,
      allowNull: true,
    },
    partyA: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    partyB: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    latestVersionA: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    latestVersionB: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    latestProposerA: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  });

  return Negotiation;
};
