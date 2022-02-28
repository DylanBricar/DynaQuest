const mongoose = require("mongoose");
const ObjectID = require("mongoose").Types.ObjectId;

const schema = new mongoose.Schema(
  {
    response: { type: String, required: true },
    currentquestion: { type: ObjectID, required: true, ref: "questions" },
    nextquestion: { type: ObjectID, required: true, ref: "questions" },
  },
  { timestamps: false }
);

const Responses = mongoose.model("responses", schema);

module.exports = Responses;
