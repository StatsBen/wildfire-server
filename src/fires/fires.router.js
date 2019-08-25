const { Router } = require("express");
const controller = require("./fires.controller");
const db = require("../database/db");

const firesRouter = Router();

/** fires/fire  **/
firesRouter.route("/").get(controller.getFountainFireDemo);

module.exports = firesRouter;
