const path = require("path");
const sqlite3 = require("sqlite3");
const { handleDBError } = require("../utils");

const DB_PATH = path.join(__dirname, "db.sqlite");
console.log(`\nAttempting to connect to database at: ${DB_PATH} ... ... `);

const db = new sqlite3.Database(DB_PATH, err => {
  if (err) handleDBError(err);
  else console.log("\nDatabase connected!");
});

module.exports = db;
