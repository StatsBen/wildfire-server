const db = require("../database/db");
const { parseDate } = require("../utils");

const controller = {
  getFiresByState: async (req, res) => {
    const { state } = req.params;
    let sqlWhere = `STATE='${state}'`;
    try {
      const fires = await db.getAllAsync(sqlWhere);
      return res.status(200).json(await fires);
    } catch (e) {
      db.handleError(e, res);
    }
  },

  getFiresByYear: async (req, res) => {
    const { year } = req.params;
    let sqlWhere = `FIRE_YEAR=${year}`;
    try {
      const fires = await db.getAllAsync(sqlWhere);
      return res.status(200).json(await fires);
    } catch (e) {
      db.handleError(e, res);
    }
  },

  getFiresByStateAndYear: async (req, res) => {
    const { year, state } = req.params;
    let sqlWhere = `FIRE_YEAR=${year} AND STATE='${state}'`;
    try {
      const fires = await db.getAllAsync(sqlWhere);
      return res.status(200).json(await fires);
    } catch (e) {
      db.handleError(e, res);
    }
  },

  getFireByStartDate: async (req, res) => {
    const { doy, year } = parseDate(req);
    let sqlWhere = `DISCOVERY_DOY=${doy} AND FIRE_YEAR=${year}`;
    try {
      const fires = await db.getAllAsync(sqlWhere);
      return res.status(200).json(await fires);
    } catch (e) {
      db.handleError(e, res);
    }
  },

  getFireBurningOn: async (req, res) => {
    const { doy, year } = parseDate(req);
    let sqlWhere = `
			DISCOVERY_DOY<=${doy} AND
			CONT_DOY>=${doy} AND
			FIRE_YEAR=${year} `;
    try {
      const fires = await db.getAllAsync(sqlWhere);
      return res.status(200).json(await fires);
    } catch (e) {
      db.handlError(e, res);
    }
  },

  getFountainFireDemo: async (req, res) => {
    let sql = `SELECT * FROM Fires WHERE FIRE_NAME='FOUNTAIN';`;
    try {
      const fire = await db.getOneAsync(sql);
      return res.status(200).json(await fire);
    } catch (e) {
      db.handleError(e, res);
    }
  }
};

module.exports = controller;
