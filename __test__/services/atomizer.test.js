const { Atom, atomizer } = require('../../src/services/atomizer');
const mock = require('../__mock__/services.mock');

describe('Atomizer', () => {
  test('Should return an Atom', () => {
    expect(atomizer(mock.contract)).toBeInstanceOf(Atom);
  });
});
