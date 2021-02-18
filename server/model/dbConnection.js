const mongoose = require("mongoose");

const { MONGO_URI, NODE_ENV, LOCAL_MONGO_URI } = process.env;
const uri = NODE_ENV === "development" ? LOCAL_MONGO_URI : MONGO_URI;

mongoose.Promise = require("bluebird");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to database successfully...."));

const connection = () =>
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

module.exports = connection;
