var path = require("path");
var sqlite3 = require("sqlite3");
var express = require("express");

export const app = express();

export const start = async () => {
  try {
    // await connect(); <- Import a connect function that connects to the DB
    app.listen(3001, () => {
      console.log(`REST API on http://localhost:3001/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
