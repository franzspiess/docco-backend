const data = {
  legalName: 'The Little Company Pty Ltd',
  displayName: 'Little Company',
  email: 'littleparty@littlecompany.com',
  address: '100 Queens Road Central, Hong Kong, S.A.R.',
};

const model = {
  create: jest.fn(() => ({
  })),
  findByPk: jest.fn(() => ({
    legalName: 'The Little Company Pty Ltd',
    displayName: 'Little Company',
    email: 'littleparty@littlecompany.com',
    address: '100 Queens Road Central, Hong Kong, S.A.R.',
  })),
};

const req = {
  body: {
    legalName: 'The Little Company Pty Ltd',
    displayName: 'Little Company',
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
  data,
  model,
  req,
  res,
};
