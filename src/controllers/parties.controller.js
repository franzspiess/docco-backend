const sanitize = require('../utils/sanitize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config.js');

class Parties {
  constructor(parties) {
    this.parties = parties;
    this.create = this.create.bind(this);
    this.login = this.login.bind(this);
    this.getPartyDetailsByEmail = this.getPartyDetailsByEmail.bind(this);
    this.getPartyDetailsById = this.getPartyDetailsById.bind(this);
  }

  async login(req, res) {
    const [, base64Token] = req.headers.authorization.split(' ');
    try {
      const [email, password] = Buffer.from(base64Token, 'base64')
        .toString('utf8')
        .split(':');
      const party = await this.parties.findOne({ where: { email } });
      const isPasswordTrue = await bcrypt.compare(password, party.authorisation);
      if (isPasswordTrue) {
        res.status(200).send(sanitize(party.dataValues));
      } else {
        res.status(401).send('Not Authorized');
      }
    } catch (err) {
      console.log(err);
      res.status(401).send('Not Authorized');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async create(req, res, next) {
    try {
      const party = req.body;
      const salt = await bcrypt.genSalt(8);
      party.authorisation = await bcrypt.hash(req.body.authorisation, salt);
      // create jwt token and add to party object
      party.token = await jwt.sign(party.email, config.authorisation.secret);
      // save party to database
      const createdParty = await this.parties.create(party);
      // return created Party without authorisation (hashed password)
      res.status(201).send(sanitize(createdParty.dataValues));
    } catch (err) {
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
