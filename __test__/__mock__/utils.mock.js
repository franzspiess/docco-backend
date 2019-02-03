const mock = {};

mock.unsafeObject = {
  name: 'James',
  surname: 'Rhodes',
  password: 3,
  hash: 4,
};

mock.safeObject = {
  name: 'James',
  surname: 'Rhodes',
};

mock.unwantedProps = ['password', 'hash'];
mock.sensitiveEntries = {
  password: 3,
  hash: 4,
};

module.exports = mock;
