const mongoose = require('mongoose');

const processingSchema = new mongoose.Schema({
  Weight: {
    type: Number,
    required: true
  },
  Chest: {
    type: Number,
    required: true
  },
  frontHand: {
    type: Number,
    required: true
  },
  waist: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Processing = mongoose.model('processing', processingSchema);
