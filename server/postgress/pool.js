const Pool = require("pg").Pool;
const pool = new Pool({
  user: "ayman",
  host: "localhost",
  database: "test_project",
  password: "1979",
  port: 5432,
});

module.exports = pool
