const mysql = require("mysql2");

const connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "dbcrud",
});

connection.connect((err) => {
  if (err) {
    console.error("Error", err);
    return;
  }

  console.log("Connected to MySQL");
});

module.exports = connection;
