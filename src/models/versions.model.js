module.exports = (Sequelize, sequelize) => {
  const Version = sequelize.define('Version', {
    negotiation: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    content: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  });

  return Version;
};
