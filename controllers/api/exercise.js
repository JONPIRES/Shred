const express = require("express");
const { Exercise } = require("../../models");
const {
  getNextKeyDef,
} = require("@testing-library/user-event/dist/keyboard/getNextKeyDef");

module.exports = {
  createExercise,
  editExercise,
  deleteExercise,
  viewExercise,
  viewExercises,
};

async function viewExercises(req, res) {
  try {
    const exercises = await Exercise.find({});
    res.send(exercises);
    console.log("exercises");
  } catch (err) {
    console.log(err);
    throw new Error("view All exercises controller Error");
  }
}

async function viewExercise(req, res) {
  try {
    const showExercise = await Exercise.findById(req.params.id);
  } catch (error) {
    console.log(error);
    throw new Error("View Exercise Error");
  }
}

async function createExercise(req, res) {
  try {
    await Exercise.create(req.body);
  } catch (error) {
    console.log(error);
    throw new Error("Create Exercise Error");
  }
}

async function editExercise(req, res) {
  try {
    await Exercise.findByIdAndUpdate(req.body);
  } catch (error) {
    console.log(error);
    throw new Error("Edit Exercise Error");
  }
}

async function deleteExercise(req, res) {
  try {
    await Exercise.findByIdAndDelete(req.params.id);
  } catch (error) {
    console.log(error);
    throw new Error("Delete Exercise Error");
  }
}
