const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post("/", usersCtrl.create);

router.post("/login", usersCtrl.login);

router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

router.get("/get-user/:id", ensureLoggedIn, usersCtrl.getUser);

router.post("/update-user/:id", usersCtrl.updateUser);

router.post("/delete-user/:id", usersCtrl.deleteUser);

module.exports = router;
