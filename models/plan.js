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
    muscleGroup: {
      type: String,
      required: true,
    },
    exercises: [
      {
        exercise: {
          type: Schema.Types.ObjectId,
          ref: "Users",
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