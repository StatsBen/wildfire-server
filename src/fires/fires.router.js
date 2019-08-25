const { Router } = require("express");
const controller = require("./fires.controller");
const db = require("../database/db");

const firesRouter = Router();

firesRouter.route("/").get(controller.getFountainFireDemo);

firesRouter.route("/year=:year").get((req, res) => {
  controller.getFiresByYear(req.params.year, req, res);
});

firesRouter.route("/state=:state").get((req, res) => {
  controller.getFiresByState(req.params.state, req, res);
});

firesRouter.route("/state=:state?/year=:year?").get((req, res) => {
  controller.getFiresByStateAndYear(
    req.params.state,
    req.params.year,
    req,
    res
  );
});

firesRouter.route("/year=:year?/state=:state?").get((req, res) => {
  controller.getFiresByStateAndYear(
    req.params.state,
    req.params.year,
    req,
    res
  );
});

module.exports = firesRouter;
