const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users"
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
