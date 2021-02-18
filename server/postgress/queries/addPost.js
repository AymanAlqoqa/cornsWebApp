const pool = require("../pool");

const addPost = async (req, res, next) => {
  const { title, post } = req.body;
  const result = await pool.query(
    "INSERT INTO lists (title, post) values ($1,$2)",
    [title, post]
  );

  if (!result.rowCount) return next(Boom.internal("Internal server Error"));

  res.status(201).send({
    statusCode: res.statusCode,
    data: req.body,
  });
};

module.exports = addPost;
