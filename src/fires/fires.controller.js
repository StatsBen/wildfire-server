const db = require("../database/db");

const controller = {
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
      res.status(400).json({ message: "Error getting data from database!" });
    }
  }
};

module.exports = controller;
