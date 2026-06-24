const express = require("express");
const controller = require("./contact.controller");
const validation = require("./contact.validation");
const validate = require("../../middlewares/validate.middleware");

const router = express.Router();

router.post("/", validate(validation.create), controller.send);

module.exports = router;
