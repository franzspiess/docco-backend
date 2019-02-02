module.exports = (Sequelize, sequelize) => {
  const PartyModel = sequelize.define('party', {
    legal_name: {
      type: Sequelize.CHAR,
      allowNull: false,
      unique: true,
    },
    display_name: {
      type: Sequelize.CHAR,
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.CHAR,
      allowNull: false,
      unique: true,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    authorisation: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
  }, {
    timestamps: false,
  });
  return PartyModel;
};
