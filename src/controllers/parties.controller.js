class PartiesController {
  constructor(PartiesDB) {
    this.PartyDataModel = PartiesDB;
    this.createParty = this.createParty.bind(this);
    this.getPartyDetails = this.getPartyDetails.bind(this);
  }

  async createParty(req, res, next) {
    const data = await this.PartyDataModel.createParty(req.body);
    this.res.status(201).send(data.id);
  }

  async getPartyDetails(req, res, next) {
    const partyId = this.req.headers.params; // re-check if this is how to get the :partyId
    const partyData = await this.PartyDataModel.getPartyDetails(partyId);
    this.res.status(200).send(partyData);
  }
}

export default PartiesController;
