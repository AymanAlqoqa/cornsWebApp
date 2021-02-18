const Boom = require("@hapi/boom");
const List = require("../../model/list");

const addList = async (req, res, next) => {
  const { title, post } = req.body;

  try {
    const newList = await List.create(req.body);
    res.statusCode = 201;
    res.send({
      status: res.statusCode,
      data: newList,
    });
  } catch (error) {
    console.log(error);
    return next(Boom.internal("Internal server Error"));
  }
};

module.exports = addList;
