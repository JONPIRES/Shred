const express = require("express");
const router = express.Router();
const planCtrl = require("../../controllers/api/plan");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", planCtrl.viewPlans);

router.get("/detail/:id", planCtrl.planDetail);

router.post("/create-plan", planCtrl.createPlan);

router.post("/add-exercise/:id", planCtrl.addExercise);

router.put("/edit-plan/:id", planCtrl.editPlan);

router.post("/delete-plan/:id", planCtrl.deletePlan);

module.exports = router;
