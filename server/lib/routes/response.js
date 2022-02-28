const express = require("express");
const router = express.Router();
const Responses = require("../models/responses");

router.get("/", async (req, res) => {
  const errors = [];
  const response = await Responses.find().catch((err) => {
    errors.push(err.message);
  });
  if (!response && errors.length == 0) {
    errors.push("Given ID not found on database.");
  }
  if (errors.length > 0) {
    res.status(500).send(errors);
    return;
  }
  res.send(response);
});

router.get("/:idResponse", async (req, res) => {
  const errors = [];
  const response = await Responses.findById(req.params.idResponse).catch(
    (err) => {
      errors.push(err.message);
    }
  );
  if (!response && errors.length == 0) {
    errors.push("Given ID not found on database.");
  }
  if (errors.length > 0) {
    res.status(500).send(errors);
    return;
  }
  res.send(response);
});

router.get("/all/:idQuestion", async (req, res) => {
  const errors = [];
  const response = await Responses.find({
    currentquestion: req.params.idQuestion,
  })
    .populate({ path: "nextquestion", select: "question" })
    .catch((err) => {
      errors.push(err.message);
    });
  if (!response && errors.length == 0) {
    errors.push("Given ID not found on database.");
  }
  if (errors.length > 0) {
    res.status(500).send(errors);
    return;
  }
  res.send(response);
});

module.exports = router;
