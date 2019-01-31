module.exports = (sequelize) => {
  const Party = sequelize.define('Party', {
    legal_name: {},
    display_name: {},
    email: {},
    address: {},
    authorisation: {},
  });

  return Party;
};
