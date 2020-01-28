const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
  typeName: {
    type: String,
    required: true
  },
  buttonValue: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Training = mongoose.model('training', trainingSchema);
