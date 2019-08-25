const db = require("../database/db");

const controller = {
  getFiresByState: async (state, req, res) => {
    let sql = `SELECT * FROM Fires WHERE STATE='${state}' LIMIT 100;`;
    db.logQuery(sql);
    try {
      const fires = await db.getAllAsync(sql);
      console.log("result is: \n");
      console.log(await fires);
      return res.status(200).json(await fires);
    } catch (e) {
      db.handleError(e);
      res
        .status(400)
        .json({ message: "Error getting data from database!" })
        .end();
    }
  },

  getFiresByYear: async (year, req, res) => {
    let sql = `SELECT * FROM Fires WHERE FIRE_YEAR=${year} LIMIT 100;`;
    db.logQuery(sql);
    try {
      const fires = await db.getAllAsync(sql);
      console.log("result is: \n");
      console.log(await fires);
      return res.status(200).json(await fires);
    } catch (e) {
      db.handleError(e);
      res
        .status(400)
        .json({ message: "Error getting data from database!" })
        .end();
    }
  },

  getFountainFireDemo: async (req, res) => {
    let sql = `SELECT * FROM Fires WHERE FIRE_NAME='FOUNTAIN';`;
    db.logQuery(sql);
    try {
      const fire = await db.getOneAsync(sql);
      console.log("Result is: \n");
      console.log(fire);
      return res.status(200).json({ fire });
    } catch (e) {
      db.handleError(e);
      res
        .status(400)
        .json({ message: "Error getting data from database!" })
        .end();
    }
  }
};

module.exports = controller;
