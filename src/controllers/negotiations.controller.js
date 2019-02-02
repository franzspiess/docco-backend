class Negotiations {
  constructor(negotiations, versions) {
    this.negotiations = negotiations;
    this.versions = versions;
    this.create = this.create.bind(this);
    this.getOne = this.getOne.bind(this);
    this.publish = this.publish.bind(this);
  }

  async publish(req, res) {
    const { content, dealAgreed } = req.body;
    const negotiation = req.params.negotiationId;
    try {
      if (!dealAgreed) {
        const version = await this.versions.create({
          negotiation,
          content,
          approvedA: true,
          approvedB: false,
        });

        this.negotiations.update(
          { latestVersionA: version.id, latestProposerA: true },
          { where: { id: negotiation } },
        ).then(rowsUpdate => res.status(201).send(rowsUpdate));
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
        include: ['aDetails', 'bDetails', 'aVersion', 'bVersion'],
      });

      res.send(negotiation).status(200);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(500);
    }
  }
    /*
    {
      "negotiation_id": 2,
      "title": "Huge Loan",
      "description": "Buy stuff you don't need with money you don't have.",
      "your": {
        "details": {
          "legal_name": "Transformers Company Limited",
          "display_name": "the_transformers",
          "email": "money@gmail.com",
          "address": "123 Fake Street, Fakeville, Australia, 3001, Flat Earth"
        },
        "content": {
          "contract": "## TITLE this will be a markdown string very large string",
          "modifiedAt": 123/123ç7123
      }
      },
      "their": {
        "details": {
          "legal_name": "Transformers Company Limited",
          "display_name": "the_transformers",
          "email": "money@gmail.com",
          "address": "123 Fake Street, Fakeville, Australia, 3001, Flat Earth"
        },
        "content": "## TITLE this will be a markdown string very large string",
      }
      "published_at": "2015-08-05T08:40:51.620Z",
      "modified_at": "2018-08-05T08:40:51.620Z",
      "youEditedLast": false,
    }
    */

  async getAll(req, res) {
    /*
      {
        "negotiation_id": 5,
        "title": "The Title",
        "description": "A short explanation on the matter of the negotiation.",
        "your": {
          "details": {
            "legal_name": "Transformers Company Limited",
            "display_name": "the_transformers",
            "email": "money@gmail.com",
            "address": "123 Fake Street, Fakeville, Australia, 3001, Flat Earth"
          }
        },
        "their": {
          "details": {
            "legal_name": "Apple Company Limited",
            "display_name": "the_transformers",
            "email": "money@gmail.com",
            "address": "123 Fake Street, Fakeville, Australia, 3001, Flat Earth"
          }
        },
        "published_at": "2015-08-05T08:40:51.620Z",
        "modified_at": "2018-08-05T08:40:51.620Z",
        "youEditedLast": false,
      }
    */
    return this;
  }
}

module.exports = Negotiations;
