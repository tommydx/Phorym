// Configure Node to talk to Postgres
const pgp = require("pg-promise")();

const db = pgp ({
  database: "phorym_db"
});

// export module to reuse throughout app
module.exports = db;
