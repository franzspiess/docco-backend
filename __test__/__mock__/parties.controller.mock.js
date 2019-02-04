const data = {
  legalName: 'The Little Company Pty Ltd',
  displayName: 'Little Company',
  email: 'littleparty@littlecompany.com',
  address: '100 Queens Road Central, Hong Kong, S.A.R.',
};

const model = {
  create: jest.fn(() => ({
    id: 3,
    legalName: 'The Little Company Pty Ltd',
    displayName: 'Little Company',
    email: 'littleparty@littlecompany.com',
    address: '100 Queens Road Central, Hong Kong, S.A.R.',
    authorisation: 'password',
  })),
  findByPk: jest.fn(() => ({
    id: 3,
    legalName: 'The Little Company Pty Ltd',
    displayName: 'Little Company',
    email: 'littleparty@littlecompany.com',
    address: '100 Queens Road Central, Hong Kong, S.A.R.',
    authorisation: 'password',
  })),
  findOne: jest.fn(() => ({
    id: 3,
    legalName: 'The Little Company Pty Ltd',
    displayName: 'Little Company',
    email: 'littleparty@littlecompany.com',
    address: '100 Queens Road Central, Hong Kong, S.A.R.',
    authorisation: 'password',
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
    email: 'hello@kitty.com',
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
