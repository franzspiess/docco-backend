const omit = require('./omit');

module.exports = body => omit(['authorisation', 'hash'], body);
