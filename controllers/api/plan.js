const { Plan } = require("../../models");

module.exports = {
  createPlan,
  editPlan,
  deletePlan,
  viewPlan,
  viewPlans,
  planDetail,
  addExercise,
};

async function viewPlans(req, res) {
  try {
    const plans = await Plan.find({});
    res.send(plans);
    console.log("exercises");
  } catch (err) {
    console.log(err);
    throw new Error("view All exercises controller Error");
  }
}

async function planDetail(req, res) {
  try {
    console.log(req.params.id);
    const exercise = await Exercise.findById(req.params.id);
    res.send(exercise);
  } catch (err) {
    console.log(err);
    throw new Error("exercise detail controller Error");
  }
}

async function viewPlan(req, res) {
  try {
    const showExercise = await Exercise.findById(req.params.id);
  } catch (error) {
    console.log(error);
    throw new Error("View Exercise Error");
  }
}

async function createPlan(req, res) {
  try {
    await Plan.create(req.body);
  } catch (error) {
    console.log(error);
    throw new Error("Create Exercise Error");
  }
}

async function addExercise(req, res) {
  try {
    const form = req.body;
    const plan = await Plan.findById(req.params.id);
    plan.exercise.push({
      exercise: form.exercise,
      sets: form.sets,
      reps: form.reps,
      duration: form.duration,
      notes: form.notes,
    });
    await plan.save();
  } catch (error) {
    console.log(error);
    throw new Error("Create Exercise Error");
  }
}

async function editPlan(req, res) {
  try {
    console.log("something");
    await Exercise.findByIdAndUpdate(req.params.id, req.body);
  } catch (error) {
    console.log(error);
    throw new Error("Edit Exercise Error");
  }
}

async function deletePlan(req, res) {
  try {
    console.log("route was hit");
    await Exercise.findByIdAndDelete(req.params.id);
  } catch (error) {
    console.log(error);
    throw new Error("Delete Exercise Error");
  }
}
