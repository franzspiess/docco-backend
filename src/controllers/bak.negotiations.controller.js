class Negotiations {
  constructor(model) {
    this.negotiationModel = model;

    this.create = this.create.bind(this);
    this.getOne = this.getOne.bind(this);
    this.getAll = this.getAll.bind(this);
    this.addParties = this.addParties.bind(this);
    this.publish = this.publish.bind(this);
  }

  async create(req, res) {
    console.log('req', req);
    const data = await this.negotiationModel.create(req.body);
    res.status(201).send(data);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const negotiation = await this.negotiationModel.findById(id);
    res.status(200).send(negotiation);
  }

  async getAll(req, res) {
    const negotiations = await this.negotiationModel.find();
    res.status(200).send(negotiations);
  }

  async addParties(req, res) {
    const { partyId } = req.params;
    const data = await this.negotiationModel.create(partyId);
    res.status(201).send(data);
  }

  async publish(req, res) {
    const { proposal } = req.body;
    const data = await this.negotiationModel.publish(proposal);
    res.status(201).send(data);
  }
}

module.exports = Negotiations;
