const express = require("express");
const controller = require("./auth.controller");
const validation = require("./auth.validation");
const validate = require("../../middlewares/validate.middleware");

const router = express.Router();

router.post("/login", validate(validation.login), controller.login);

module.exports = router;
