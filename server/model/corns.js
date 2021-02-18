const { model, Schema } = require("mongoose");

const cornsSchema = new Schema(
  {
    nickname: {
      type: String,
      unique: true,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created",
      updatedAt: "updated",
    },
  }
);

module.exports = model("corn", cornsSchema);
