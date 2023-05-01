const express = require("express");
const router = express.Router();
const planCtrl = require("../../controllers/api/plan");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", ensureLoggedIn, planCtrl.viewPlans);

router.get("/detail/:id", ensureLoggedIn, planCtrl.planDetail);

router.post("/create-plan", ensureLoggedIn, planCtrl.createPlan);

router.post("/add-exercise/:id", ensureLoggedIn, planCtrl.addExercise);

router.put("/edit-plan/:id", ensureLoggedIn, planCtrl.editPlan);

router.post("/delete-plan/:id", ensureLoggedIn, planCtrl.deletePlan);

module.exports = router;
