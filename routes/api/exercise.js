const express = require("express");
const router = express.Router();
const exerciseCtrl = require("../../controllers/api/exercise");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", exerciseCtrl.viewExercises);

router.get("/detail/:id", exerciseCtrl.exerciseDetail);

router.post("/create-exercise", ensureLoggedIn, exerciseCtrl.createExercise);

router.put("/edit-exercise/:id", ensureLoggedIn, exerciseCtrl.editExercise);

router.post(
  "/delete-exercise/:id",
  ensureLoggedIn,
  exerciseCtrl.deleteExercise
);

module.exports = router;
