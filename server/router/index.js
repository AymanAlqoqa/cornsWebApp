const addCorn = require("../controller/corns/addCorn");
const getCorns = require("../controller/corns/getCorns");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to me");
});

router.get("/corns", getCorns);
router.post("/corns", addCorn);

module.exports = router;
