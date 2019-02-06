module.exports = (Sequelize, sequelize) => {
  const PartyModel = sequelize.define(
    'party',
    {
      legalName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      displayName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      authorisation: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      timestamps: false
    }
  );
  return PartyModel;
};
