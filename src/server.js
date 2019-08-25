const cors = require("cors");
const { json, urlencoded } = require("body-parser");
const express = require("express");
// const db = require("./database/db");

const firesRouter = require("./fires/fires.router");

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "server is running here!" });
});

app.use("/fires", firesRouter);

const start = async () => {
  try {
    app.listen(3001, () => {
      console.log(`\nREST API on http://localhost:3001/api \n `);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = start;
