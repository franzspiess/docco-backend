const omit = require('../../src/utils/omit');
const mock = require('../__mock__/utils.mock');

describe('Omit properties', () => {
  test('should omit specified properties', () => {
    expect(omit(mock.unwantedProps, mock.unsafeObject)).not.toMatchObject(mock.sensitiveEntries);
  });
  test('should omit specified properties', () => {
    expect(omit(mock.unwantedProps, mock.unsafeObject)).toMatchObject(mock.safeObject);
  });
});
