const { Plan } = require("../../models");

module.exports = {
  createPlan,
  editPlan,
  deletePlan,
  viewPlan,
  viewPlans,
  planDetail,
  addExercise,
  addNote,
  deleteExercise,
};

async function viewPlans(req, res) {
  try {
    const plans = await Plan.find({});
    res.send(plans);
  } catch (err) {
    console.log(err);
    throw new Error("view All exercises controller Error");
  }
}

async function planDetail(req, res) {
  try {
    console.log(req.params.id);
    const plan = await Plan.findById(req.params.id);
    res.send(plan);
  } catch (err) {
    console.log(err);
    throw new Error("exercise detail controller Error");
  }
}

async function viewPlan(req, res) {
  try {
    await Exercise.findById(req.params.id);
  } catch (error) {
    console.log(error);
    throw new Error("View Exercise Error");
  }
}

async function createPlan(req, res) {
  try {
    const createdPlan = await Plan.create(req.body);
    res.send(createdPlan);
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
      name: form.name,
      muscleGroup: form.muscleGroup,
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
async function addNote(req, res) {
  try {
    const form = req.body;
    const plan = await Plan.findById(req.params.id);
    plan.exercise[req.params.idx].notes.push(form.notes);
    await plan.save();
  } catch (error) {
    console.log(error);
    throw new Error("Create Exercise Error");
  }
}
async function deleteExercise(req, res) {
  try {
    const plan = await Plan.findById(req.params.id);
    console.log(plan);
    plan.exercise.splice(req.params.idx, 1);
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
    await Exercise.findByIdAndDelete(req.params.id);
  } catch (error) {
    console.log(error);
    throw new Error("Delete Exercise Error");
  }
}
