const mongoose = require("mongoose");

const eve2Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  roll: {
    type: String,
    required: true,
    unique: true,
  },
  branch: {
    type: String,
    lowercase: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  githubId: {
    type: String,
    required: true,
    unique: true,
  },
});

const event2 = mongoose.model("Event2", eve2Schema, "E2");

module.exports = event2;
