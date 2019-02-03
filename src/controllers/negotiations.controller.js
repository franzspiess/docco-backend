const omit = require('../utils/omit');

class Negotiations {
  constructor(negotiations, versions) {
    this.negotiations = negotiations;
    this.versions = versions;
    this.create = this.create.bind(this);
    this.getOne = this.getOne.bind(this);
    this.getAll = this.getAll.bind(this);
    this.publish = this.publish.bind(this);
  }

  async publish(req, res) {
    const { content, dealAgreed } = req.body;
    const { token } = req;
    const negotiation = req.params.negotiationId;
    try {
      if (!dealAgreed) {
        const version = await this.versions.create({
          negotiation,
          content,
          dealAgreed,
        });
        this.negotiations.findByPk(negotiation).then((entry) => {
          entry.update(entry.partyA === token
            ? { aVersion: version.id, latestProposerA: true }
            : { bVersion: version.id, latestProposerA: false })
            .then(data => res.status(201).send(data));
        });
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(422).send(error);
    }
  }

  async create(req, res) {
    try {
      const negotiation = req.body;
      const data = await this.negotiations.create(negotiation);
      res.status(201).send(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(500);
    }
  }

  async getOne(req, res) {
    try {
      const { negotiationId: id } = req.params;
      const negotiation = await this.negotiations.findOne({
        where: { id },
        include: ['aDetails', 'bDetails', 'aContent', 'bContent'],
      });

      const body = {
        id: parseInt(id, 10),
        title: negotiation.title,
        description: negotiation.description,
        your: {
          details: omit(['authorisation'], negotiation.bDetails).dataValues,
          content: negotiation.aContent,
        },
        their: {
          details: omit(['authorisation'], negotiation.bDetails).dataValues,
          content: negotiation.bContent,
        },
        publishedAt: negotiation.publishedAt,
        modifiedAt: negotiation.publishedAt,
        youEditedLast: true,
      };

      res.send(body).status(200);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(500);
    }
  }

  async getAll(req, res) {
    try {
      const negotiations = await this.negotiations.findAll({
        include: ['aDetails', 'bDetails', 'aContent', 'bContent'],
      });

      const body = negotiations.map((negotiation) => {
        const [yourParty, yourDetails] = negotiation.partyA === req.token ? [negotiation.partyA, negotiation.aDetails] : [negotiation.partyB, negotiation.bDetails];

        return {
          title: negotiation.title,
          description: negotiation.description,
          your: {
            details: omit(['authorisation'], negotiation.bDetails).dataValues,
            content: negotiation.aContent,
          },
          their: {
            details: omit(['authorisation'], negotiation.bDetails).dataValues,
            content: negotiation.bContent,
          },
          publishedAt: negotiation.publishedAt,
          modifiedAt: negotiation.publishedAt,
          youEditedLast: true,
        };
      });

      res.send(body).status(200);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(500);
    }
  }
}

module.exports = Negotiations;
