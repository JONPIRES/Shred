const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  goals: {
    type: String,
    required: true,
  },
  cycle: {
    type: Number,
  },
  exercise: {
    exercises: [
      {
        exercise: {
          type: Schema.Types.ObjectId,
          ref: "Exercises",
        },
        sets: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        duration: {
          type: Number,
        },
        notes: {
          type: String,
        },
      },
    ],
  },
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
