var path = require("path");
var sqlite3 = require("sqlite3");
var express = require("express");

const app = express();

const start = async () => {
  const DB_PATH = path.join(__dirname, "database/db.sqlite");

  try {
    let dbConnected = true;

    console.log(`\nAttempting to connect to database at: ${DB_PATH} ... ... `);

    var wfdb = new sqlite3.Database(DB_PATH, err => {
      if (err) {
        console.error("\x1b[31m", `\n Couldn't connect to the database :'( `);
        console.error(err);
        console.log("\n");
        process.exit(1);
      } else {
        console.log("\nDatabase connected!");
      }
    });

    if (dbConnected) {
      app.listen(3001, () => {
        console.log(`\nREST API on http://localhost:3001/api \n `);
      });
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = start;
