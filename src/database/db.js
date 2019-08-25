const path = require("path");
const sqlite3 = require("sqlite3");
const { handleDBError } = require("../utils");

const DB_PATH = path.join(__dirname, "db.sqlite");
console.log(`\nAttempting to connect to database at: ${DB_PATH} ... ... `);

const db = new sqlite3.Database(DB_PATH, err => {
  if (err) handleDBError(err);
  else console.log("\nDatabase connected!");
});

db.getOneAsync = sql => {
  return new Promise((resolve, reject) => {
    db.get(sql, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

db.getAllAsync = sql => {
  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

db.logQuery = q => {
  console.log('Running query: \n"' + q + '"\n');
};

db.handleError = err => {
  console.error("\x1b[31m", "\nDatabase request failed! \n");
  console.error(err);
  return null;
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
