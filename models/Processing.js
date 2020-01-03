const mongoose = require("mongoose");

const processingSchema = new mongoose.Schema({
  Weight: {
    type: Number
  },
  Chest: {
    type: Number
  },
  frontHand: {
    type: Number
  },
  backHand: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Processing = mongoose.model("processing", processingSchema);
