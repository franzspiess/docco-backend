class Parties {
  constructor(model) {
    this.model = model;
    this.createParty = this.createParty.bind(this);
    this.getPartyDetails = this.getPartyDetails.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  async createParty(req, res, next) {
    try {
      const data = await this.model.create(req.body);
      res.status(201).send({
        id: data.id,
        created: true,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      res.sendStatus(422);
    }
  }

  // eslint-disable-next-line no-unused-vars
  async getPartyDetails(req, res, next) {
    try {
      const { partyId } = req.params;
      const partyData = await this.model.findByPk(partyId);
      res.status(200).send(partyData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      res.sendStatus(422);
    }
  }
}

module.exports = Parties;
