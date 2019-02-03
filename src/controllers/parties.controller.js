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
        legalName: data.legalName,
        displayName: data.displayName,
        email: data.email,
        address: data.address,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(422).send('Error creating party :(');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async getPartyDetails(req, res, next) {
    try {
      const { partyId } = req.params;
      const data = await this.model.findByPk(partyId);
      res.status(200).send({
        legalName: data.legalName,
        displayName: data.displayName,
        email: data.email,
        address: data.address,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(404).send('Error finding party :(');
    }
  }
}

module.exports = Parties;
