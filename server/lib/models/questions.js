const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    first: { type: Boolean, required: false },
  },
  { timestamps: false }
);

const Questions = mongoose.model("questions", schema);

module.exports = Questions;
