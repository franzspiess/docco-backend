require('dotenv').config();

const path = require('path');
const mysql = require('mysql');
const fs = require('fs');

const migrationScript = fs.readFileSync(path.join(__dirname, '/db'), 'utf8');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) throw err;
  else {
    // eslint-disable-next-line no-unused-vars
    connection.query(migrationScript, (error, result, fields) => {
      if (error) throw error;
      // eslint-disable-next-line no-console
      console.log('Database has been created');
    });
  }
  connection.end();
});
