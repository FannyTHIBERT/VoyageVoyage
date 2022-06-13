const mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  database: "voyage",
  user: "root",
  password: "root",
  port: "3306",
  multipleStatements: true
});

module.exports = con;