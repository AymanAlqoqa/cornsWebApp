const Boom = require("@hapi/boom");
const Corns = require("../../model/corns");
const Owners = require("../../model/owners");

const getCorns = async (req, res, next) => {
  try {
    const corns = await Corns.find({});
    res.statusCode = 200;
    res.send({
      status: res.statusCode,
      data: [...corns], 
    });
  } catch (error) {
    console.log(error);
    return next(Boom.internal("Internal server Error"));
  }
};

module.exports = getCorns;
