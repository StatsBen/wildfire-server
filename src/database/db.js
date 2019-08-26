const path = require("path");
const sqlite3 = require("sqlite3");
const { colourizer } = require("../utils");

const LIMIT = 1000; // <- Max number of queries to return for any query
const DEV_MODE = true;
const DB_PATH = path.join(__dirname, "db.sqlite");
console.log(`Attempting to connect to database at: ${DB_PATH} ... ... `);

const db = new sqlite3.Database(DB_PATH, err => {
  if (err) handleConnectionError(err);
  else console.log("Database connected!");
});

db.getOneAsync = sql => {
  console.log('Running query: "' + sql + '"');
  return new Promise((resolve, reject) => {
    db.get(sql, (err, row) => {
      if (err) reject(err);
      else {
        if (DEV_MODE) db.logResults(row);
        resolve(row);
      }
    });
  });
};

db.getAllAsync = sqlWhere => {
  const sql = `SELECT * FROM Fires WHERE ${sqlWhere} LIMIT ${LIMIT};`;
  console.log('Build query: "' + sql + '"');

  db.logCountPossible(sqlWhere);

  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) reject(err);
      else {
        if (DEV_MODE) db.logResults(rows);
        resolve(rows);
      }
    });
  });
};

db.logResults = rows => {
  console.log("Query returned with no errors!");
  if (rows.length) {
    rows.map(row => {
      console.log(row.FIRE_NAME + ", " + row.FIRE_YEAR + " - " + row.STATE);
    });
  } else {
    if (Array.isArray(rows)) console.log("Empty result set...");
    else console.log(rows);
  }
};

db.handleError = (err, res) => {
  console.error(colourizer.red("Database request failed!"));
  console.error(err, "\n");
  res
    .status(400)
    .json({ message: "Error getting data from database!" })
    .end();
  return null;
};

db.handleConnectionError = err => {
  console.error(colourizer.red(`Couldn't connect to the database :'(`));
  console.error(err);
  process.exit(1);
};

db.logCountPossible = sqlWhere => {
  const countSQL = `SELECT COUNT(*) AS ct FROM Fires WHERE ${sqlWhere};`;
  db.get(countSQL, (err, row) => {
    if (err) {
      console.error(colourizer.red("Error counting... hm.."));
    } else {
      let ex = Math.min(LIMIT, row.ct);
      let str = `Extracted ${ex} rows out of ` + row.ct + " possible!";
      str = colourizer.bold(str);
      str = colourizer.underline(str);
      str = colourizer.green(str);
      console.log(str);
    }
  });
};

// const SQL3 = {
//   run(...args) {
//     return new Promise(function c(resolve, reject) {
//       myDB.run(...args, function onResult(err) {
//         if (err) reject(err);
//         else resolve(this);
//       });
//     });
//   },
//   // get: util.promisify(myDB.get.bind(myDB)),
//   // all: util.promisify(myDB.all.bind(myDB)),
//   // exec: util.promisify(myDB.exec.bind(myDB))
//   get: async () => {
//     console.log("in get now!");
//     await db.get.bind(db);
//   }
// };

module.exports = db;
