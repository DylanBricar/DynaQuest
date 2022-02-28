const express = require("express");
const router = express.Router();
const Questions = require("../models/questions");

router.get("/", async (req, res) => {
  const errors = [];
  const response = await Questions.find().catch((err) => {
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

router.get("/first", async (req, res) => {
  const errors = [];
  const response = await Questions.findOne({ first: true }).catch((err) => {
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

router.get("/:idQuestion", async (req, res) => {
  const errors = [];
  const response = await Questions.findById(req.params.idQuestion).catch(
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

module.exports = router;
