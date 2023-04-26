const express = require("express");
const router = express.Router();
const exerciseCtrl = require("../../controllers/api/exercise");

router.get("/", exerciseCtrl.viewExercises);

router.get("/detail/:id", exerciseCtrl.exerciseDetail);

router.post("/create-exercise", exerciseCtrl.createExercise);

router.put("/edit-exercise/:id", exerciseCtrl.editExercise);

router.post("/delete-exercise/:id", exerciseCtrl.deleteExercise);

module.exports = router;
