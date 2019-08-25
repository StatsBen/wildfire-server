const db = require("../database/db");

const controller = {
  getFiresByState: async (state, req, res) => {
    let sqlWhere = `STATE='${state}'`;
    try {
      const fires = await db.getAllAsync(sqlWhere);
      return res.status(200).json(await fires);
    } catch (e) {
      db.handleError(e, res);
    }
  },

  getFiresByYear: async (year, req, res) => {
    let sqlWhere = `FIRE_YEAR=${year}`;
    try {
      const fires = await db.getAllAsync(sqlWhere);
      return res.status(200).json(await fires);
    } catch (e) {
      db.handleError(e, res);
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
