module.exports = (Sequelize, sequelize) => {
  const Version = sequelize.define('version', {
    negotiation: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    content: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dealAgreed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  });

  return Version;
};
