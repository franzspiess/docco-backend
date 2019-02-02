class Parties {
  constructor(model) {
    this.model = model;
    this.createParty = this.createParty.bind(this);
    this.getPartyDetails = this.getPartyDetails.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  async createParty(req, res, next) {
    console.log('in parties controller');
    res.status(200).send('hola');
  }

  // eslint-disable-next-line no-unused-vars
  async getPartyDetails(req, res, next) {
    const partyId = this.req.headers.params; // re-check if this is how to get the :partyId
    const partyData = await this.model.findById(partyId);
    res.status(200).send(partyData);
  }
}

module.exports = Parties;
