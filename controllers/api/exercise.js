const { Exercise } = require("../../models");
const user = require("../../models/user");

module.exports = {
  createExercise,
  editExercise,
  deleteExercise,
  viewExercise,
  viewExercises,
  exerciseDetail,
};

async function viewExercises(req, res) {
  try {
    const exercises = await Exercise.find({});
    res.send(exercises);
  } catch (err) {
    console.log(err);
    throw new Error("view All exercises controller Error");
  }
}

async function exerciseDetail(req, res) {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.send(exercise);
  } catch (err) {
    console.log(err);
    throw new Error("exercise detail controller Error");
  }
}

async function viewExercise(req, res) {
  try {
    await Exercise.findById(req.params.id);
  } catch (error) {
    console.log(error);
    throw new Error("View Exercise Error");
  }
}

async function createExercise(req, res) {
  try {
    const exercise = await Exercise.create(req.body);
  } catch (error) {
    console.log(error);
    throw new Error("Create Exercise Error");
  }
}

async function editExercise(req, res) {
  try {
    await Exercise.findByIdAndUpdate(req.params.id, req.body);
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
