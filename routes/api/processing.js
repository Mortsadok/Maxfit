const express = require("express");

const router = express.Router();

const Processing = require("../../models/Processing");

router.post("/", async (req, res) => {
  const { Weight, Chest, frontHand, backHand } = req.body;

  try {
    new Processing({
      Weight,
      Chest,
      frontHand,
      backHand
    });
  } catch (err) {
    console.error(err.message);
  }
});
