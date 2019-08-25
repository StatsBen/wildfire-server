const handleDBError = err => {
  console.error("\x1b[31m", `\n Couldn't connect to the database :'( `);
  console.error(err);
  console.log("\n");
  process.exit(1);
};

module.exports = { handleDBError };
