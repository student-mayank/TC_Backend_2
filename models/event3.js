const mongoose = require("mongoose");

const eve3Schema = new mongoose.Schema({
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
  Semester: {
    type: Number,
    required: true,
  },
  pubgId: {
    type: String,
    unique: true,
    required: true,
  },
});

const event3 = mongoose.model("Event3", eve3Schema, "E3");

module.exports = event3;
