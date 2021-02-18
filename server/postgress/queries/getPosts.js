const pool = require("../pool");

const getPosts = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM LISTS  ORDER BY id ASC");

  if (!result.rows) return next(Boom.internal("internal server error"));
  res.status(200).send({
    statusCode: res.statusCode,
    data: result.rows,
  });
};

module.exports = getPosts;
