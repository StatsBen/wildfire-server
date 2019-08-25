const { Router } = require("express");
const controller = require("./fires.controller");
const db = require("../database/db");

const firesRouter = Router();

/** fires/fire  **/
firesRouter.route("/").get(controller.getOne);

module.exports = firesRouter;
