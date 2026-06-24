const Joi = require("joi");

const create = Joi.object({
  title: Joi.string().min(3).max(150).required(),
  department: Joi.string().required(),
  location: Joi.string().required(),
  type: Joi.string().valid("FULL_TIME", "PART_TIME", "REMOTE", "CONTRACT").required(),
  shortDesc: Joi.string().min(10).max(500).required(),
  fullDesc: Joi.string().min(10).required(),
  requirements: Joi.array().items(Joi.string()).min(1).required(),
  isActive: Joi.boolean().default(true),
  expiresAt: Joi.date().iso().greater("now").optional().allow(null),
});

const update = create.fork(
  ["title", "department", "location", "type", "shortDesc", "fullDesc", "requirements", "isActive", "expiresAt"],
  (field) => field.optional()
);

module.exports = { create, update };
