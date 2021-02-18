const express = require("express");
const bodyParser = require("body-parser");
const { join } = require("path");
const cors = require("cors");

require("dotenv").config();
const app = express();

const router = require("./router");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./model/dbConnection")();

app.use("/api/v1", router);
app.use("/public", express.static(join(__dirname, "..", "public")));

app.use("*", (req, res) =>
  res.sendFile(join(__dirname, "..", "public", "index.html"))
);

app.use((err, req, res, next) => {
  if (err.isBoom)
    return res.status(err.output.statusCode).json({
      error: err.output.payload,
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port:${port}`));

module.exports = app;
