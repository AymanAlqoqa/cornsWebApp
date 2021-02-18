const Boom = require("@hapi/boom");
const Corns = require("../../model/corns");
const Owners = require("../../model/owners");

const addCorn = async (req, res, next) => {
  const { nickname, color, avatar, owner } = req.body;

  try {
    const corn = await Corns.create(req.body);
    if (corn) res.statusCode = 201;
    return res.send({
      status: res.statusCode,
      data: { ...corn._doc },
    });
  } catch (error) {
    return next(Boom.internal("Internal server Error"));
  }
};

module.exports = addCorn;
