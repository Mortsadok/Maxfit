const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  documentsText: {
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
module.exports = Health = mongoose.model('healthDocument', healthSchema);
