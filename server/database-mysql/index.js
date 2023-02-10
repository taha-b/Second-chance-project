const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Root1234',
  database : 'mvp'
}).promise();

module.exports = connection;