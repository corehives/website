const Joi = require("joi");

const create = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  initials: Joi.string().min(1).max(5).required(),
  role: Joi.string().min(1).max(150).required(),
  rating: Joi.number().integer().min(1).max(5).default(5),
  title: Joi.string().min(1).max(255).required(),
  text: Joi.string().min(10).required(),
  isActive: Joi.boolean().default(true),
  sortOrder: Joi.number().integer().min(0).default(0),
});

const update = create.fork(
  ["name", "initials", "role", "rating", "title", "text", "isActive", "sortOrder"],
  (field) => field.optional()
);

module.exports = { create, update };
