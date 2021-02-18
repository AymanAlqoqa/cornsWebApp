const { model, Schema } = require("mongoose");

const ownersSchema = new Schema(
  {
    first_name: {
      type: String,
      unique: true,
    },
    last_name: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: {
      createdAt: "created",
      updatedAt: "updated",
    },
  }
);

module.exports = model("Owner", ownersSchema);
