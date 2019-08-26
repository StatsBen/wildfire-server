const { Router } = require("express");
const controller = require("./fires.controller");
const db = require("../database/db");

const firesRouter = Router();

firesRouter.route("/").get(controller.getFountainFireDemo);

firesRouter.route("/year=:year").get((req, res) => {
  controller.getFiresByYear(req, res);
});

firesRouter.route("/state=:state").get((req, res) => {
  controller.getFiresByState(req, res);
});

firesRouter.route("/state=:state?/year=:year?").get((req, res) => {
  controller.getFiresByStateAndYear(req, res);
});

firesRouter.route("/year=:year?/state=:state?").get((req, res) => {
  controller.getFiresByStateAndYear(req, res);
});

firesRouter.route("/startdate=:date").get((req, res) => {
  const year = controller.getFireByStartDate(req, res);
});

firesRouter.route("/burningOn=:date").get((req, res) => {
  controller.getFireBurningOn(req, res);
});

module.exports = firesRouter;
