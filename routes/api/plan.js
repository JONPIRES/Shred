const express = require("express");
const router = express.Router();
const planCtrl = require("../../controllers/api/plan");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", planCtrl.viewPlan);

router.get("/detail/:id", planCtrl.planDetail);

router.post("/create-plan", ensureLoggedIn, planCtrl.createPlan);

router.put("/edit-plan/:id", ensureLoggedIn, planCtrl.editPlan);

router.post("/delete-plan/:id", ensureLoggedIn, planCtrl.deletePlan);

module.exports = router;
