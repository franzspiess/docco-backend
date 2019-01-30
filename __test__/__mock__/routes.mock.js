// all mocks for routes should be here

const mock = {};

mock.validCreateBody = {
  title: 'Big Loan',
  description: 'Huge loan to Guillem for house in French Riviera',
  originatingPartyId: '1',
  counterParties: ['3'],
  contract: '"{}"',
};

mock.invalidCreateBodies = [
  {
    description: 'Huge loan to Guillem for house in French Riviera',
    originatingPartyId: '1',
    counterParties: ['3'],
    contract: '"{}"',
  },
  {
    title: 'Big Loan',
    description: 'Huge loan to Guillem for house in French Riviera',
    counterParties: ['3'],
    contract: '"{}"',
  },
];

module.exports = mock;
