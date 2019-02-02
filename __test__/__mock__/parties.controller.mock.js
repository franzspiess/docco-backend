
const model = {
  create: jest.fn(() => ({
  })),
  findByPk: jest.fn(() => ({
    id: 1,
  })),
};

const req = {
  body: {
    legal_name: 'The Little Company Pty Ltd',
    display_name: 'Little Company',
    email: 'littleparty@littlecompany.com',
    address: '100 Queens Road Central, Hong Kong, S.A.R.',
    authorisation: 'password',
  },
  params: {
    partyId: 1,
  },
};

const res = {
  status: jest.fn(function status() {
    return this;
  }),
  send: jest.fn(),
};

module.exports = {
  model,
  req,
  res,
};
