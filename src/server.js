const path = require("path");
const sqlite3 = require("sqlite3");
const express = require("express");
const { handleDBError } = require("./utils");

const app = express();

const start = async () => {
  const DB_PATH = path.join(__dirname, "database/db.sqlite");

  try {
    console.log(`\nAttempting to connect to database at: ${DB_PATH} ... ... `);

    var wfdb = new sqlite3.Database(DB_PATH, err => {
      if (err) handleDBError(err);
      else console.log("\nDatabase connected!");
    });

    app.listen(3001, () => {
      console.log(`\nREST API on http://localhost:3001/api \n `);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = start;
