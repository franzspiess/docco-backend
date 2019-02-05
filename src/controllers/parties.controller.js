const sanitize = require('../utils/sanitize');

class Parties {
  constructor(parties) {
    this.parties = parties;
    this.create = this.create.bind(this);
    this.getPartyDetailsByEmail = this.getPartyDetailsByEmail.bind(this);
    this.getPartyDetailsById = this.getPartyDetailsById.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  async create(req, res, next) {
    console.log('this is the negotiation request: ', req.body);
    try {
      const data = await this.parties.create(req.body);
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
      const data = await this.parties.findOne({ where: { email } });
      res.status(200).send(sanitize(data.dataValues));
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
      const data = await this.parties.findByPk(partyId);
      res.status(200).send(sanitize(data.dataValues));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(404).send('Error finding party :(');
    }
  }
}

module.exports = Parties;
