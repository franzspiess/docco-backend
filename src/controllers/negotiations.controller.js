class Negotiations {
  constructor(db) {
    this.db = db;
    this.create = this.create.bind(this);
  }

  create(negotiation) {
    return ({
      a: 1,
      b: 2,
    });
  }
}

module.exports = Negotiations;
