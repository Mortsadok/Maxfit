const mongoose = require('mongoose');

const processingSchema = new mongoose.Schema({
  Weight: {
    type: String,
    required: true
  },
  Chest: {
    type: String,
    required: true
  },
  frontHand: {
    type: String,
    required: true
  },
  waist: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  readMessage: {
    type: Boolean,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Processing = mongoose.model('processing', processingSchema);
