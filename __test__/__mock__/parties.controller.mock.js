const dbResponse = {
  id: 30,
  legal_name: 'The Little Company Pty Ltd',
  display_name: 'Little Company',
  email: 'littleparty@littlecompany.com',
  address: '100 Queens Road Central, Hong Kong, S.A.R.',
  authorisation: 'password',
};

const partyMock = {};

class GetPartyDetails {
  constructor(data) {
    this.params = {};
    this.request = {
      body: {},
    };
    this.status = 500;
    this.data = data;
  }
}

module.exports = {
  GetPartyDetails,
  dbResponse,
  partyMock,
};
