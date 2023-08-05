const mongoose = require("mongoose");

const eve1 = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
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
});

const event1 = mongoose.model("Event1", eve1, "E1");

module.exports = event1;
