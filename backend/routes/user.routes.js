const express = require("express");
const { signup, login } = require("../controllers/user.controllers");
const router = express.Router();

// signup endpoint
router.route("/signup").post(signup)
router.route("/login").post(login)

module.exports = router