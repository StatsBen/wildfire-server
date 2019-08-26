const cors = require("cors");
const { json, urlencoded } = require("body-parser");
const express = require("express");
const { colourizer } = require("./utils");

const firesRouter = require("./fires/fires.router");

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "server is running here!" });
});

app.use("/fires", firesRouter);

app.get("*", (req, res) => {
  res
    .status(404)
    .json({ message: "Invalid API Endpoint" })
    .end();
});

const start = async () => {
  try {
    app.listen(3001, () => {
      console.log(
        colourizer.bigBlue(`API is now running at http://localhost:3001/`)
      );
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = start;
