const sanitize = require('../utils/sanitize');
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
        const newVersion = await this.versions.create({
          negotiation,
          content,
          dealAgreed
        });
        this.negotiations.findByPk(negotiation).then(entry => {
          entry
            .update(
              entry.partyA === token
                ? { aVersion: newVersion.id, latestProposerA: true }
                : { bVersion: newVersion.id, latestProposerA: false }
            )
            .then(data => res.status(201).send(data));
        });
      } else if (dealAgreed) {
        this.negotiations.findByPk(negotiation).then(entry => {
          const agreedVersion = entry.latestProposerA ? entry.aVersion : entry.bVersion;
          entry
            .update({
              latestProposerA: true,
              aVersion: agreedVersion,
              bVersion: agreedVersion
            })
            .then(
              this.versions.findByPk(agreedVersion).then(version => {
                version.update({ dealAgreed: true });
              })
            )
            .then(data => res.status(200).send(data));
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
      const { token } = req;
      const negotiationDetails = { ...req.body, partyA: token, latestProposerA: true };
      const data = await this.negotiations.create(omit(['content'], negotiationDetails));
      this.versions
        .create({
          negotiation: data.id,
          content: negotiationDetails.content,
          dealAgreed: false
        })
        .then(version => {
          this.negotiations.update({ aVersion: version.id }, { where: { id: data.id } }).then(() =>
            res.status(201).send({
              ...data.dataValues,
              versionA: version.id
            })
          );
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(500);
    }
  }

  async getOne(req, res) {
    try {
      const { negotiationId: id } = req.params;
      // destructuring/renaming avoids a layer of nesting of dataValues keys
      const { dataValues: negotiation } = await this.negotiations.findOne({
        where: { id },
        include: ['aDetails', 'bDetails', 'aContent', 'bContent']
      });

      const { partyId } = req;

      const [your, their] = partyId === negotiation.partyA ? ['a', 'b'] : ['b', 'a'];

      const body = {
        id: parseInt(id, 10),
        title: negotiation.title,
        description: negotiation.description,
        yourDetails: sanitize(negotiation[`${your}Details`]).dataValues,
        yourContent: negotiation[`${your}Content`],
        theirDetails: sanitize(negotiation[`${their}Details`]).dataValues,
        theirContent: negotiation[`${their}Content`],
        publishedAt: negotiation.publishedAt,
        modifiedAt: negotiation.publishedAt,
        youEditedLast: true
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
      const { partyId } = req;
      const negotiations = await this.negotiations.findAll({
        include: ['aDetails', 'bDetails', 'aContent', 'bContent']
      });
      const body = negotiations.map(negotiation => {
        const [your, their] = partyId === negotiation.partyA ? ['a', 'b'] : ['b', 'a'];
        return {
          id: parseInt(negotiation.id, 10),
          title: negotiation.title,
          description: negotiation.description,
          yourDetails: sanitize(negotiation[`${your}Details`]).dataValues,
          yourContent: negotiation[`${your}Content`],
          theirDetails: sanitize(negotiation[`${their}Details`]).dataValues,
          theirContent: negotiation[`${their}Content`],
          publishedAt: negotiation.publishedAt,
          modifiedAt: negotiation.publishedAt,
          youEditedLast: true
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
