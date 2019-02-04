const sanitize = require('../utils/sanitize');
const omit = require('../utils/sanitize');

class Parties {
  constructor(model) {
    this.model = model;
    this.createParty = this.createParty.bind(this);
    this.getPartyDetailsById = this.getPartyDetailsById.bind(this);
    this.getPartyDetailsByEmail = this.getPartyDetailsByEmail.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  async createParty(req, res, next) {
    try {
      const data = await this.model.create(req.body);
      res.status(201).send(sanitize(data.dataValues));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(422).send('Error creating party :(');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async getPartyDetailsByEmail(req, res, next) {
    try {
      const { email } = req.params;
      const data = await this.model.findOne({ where: { email } });
      res.status(200).send(omit(['authorisation'], data.dataValues));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(404).send('Error finding email :(');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async getPartyDetailsById(req, res, next) {
    try {
      const { partyId } = req.params;
      const data = await this.model.findByPk(partyId);
      res.status(200).send(sanitize(data.dataValues));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(404).send('Error finding party :(');
    }
  }
}

module.exports = Parties;
