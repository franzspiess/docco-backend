module.exports = {
  development: {
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    logging: false, // removes SELECT 1+1 default response on connection
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  test: {
    dialect: 'mysql',
    logging: false, // removes SELECT 1+1 default response on connection
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  production: {
    dialect: 'mysql',
    logging: false, // removes SELECT 1+1 default response on connection
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
};
