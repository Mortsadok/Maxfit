const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
  trainingType: {
    type: String,
    required: true
  },
  dayValue: {
    type: Number,
    required: true
  },
  clientId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Training = mongoose.model('training', trainingSchema);
