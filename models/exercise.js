const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  muscleGroup: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
    default: "free weights",
  },
  img: {
    type: String,
  },
  explanation: {
    type: String,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
