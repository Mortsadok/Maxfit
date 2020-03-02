const mongoose = require('mongoose');

const ClientsUsersSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  clientId: {
    type: String,
    required: true
  },
  Type: {
    type: String,
    required: true
  },
  Time: {
    type: String,
    required: true
  },
  Payment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = ClientsUsers = mongoose.model(
  'ClientUser',
  ClientsUsersSchema
);
