// var path = require("path");
var sqlite3 = require("sqlite3");
var express = require("express");

const app = express();

const start = async () => {
  const DB_PATH = "../database/db.sqlite";

  try {
    // var myDB = new sqlite3.Database(DB_PATH);
    app.listen(3001, () => {
      console.log(`REST API on http://localhost:3001/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = start;
