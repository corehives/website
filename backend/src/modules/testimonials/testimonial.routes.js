const express = require("express");
const controller = require("./testimonial.controller");
const validation = require("./testimonial.validation");
const auth = require("../../middlewares/auth.middleware");
const validate = require("../../middlewares/validate.middleware");

const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", auth, validate(validation.create), controller.create);
router.put("/:id", auth, validate(validation.update), controller.update);
router.delete("/:id", auth, controller.remove);

module.exports = router;
