const Joi = require("joi");

const create = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  role: Joi.string().min(1).max(150).required(),
  rating: Joi.number().integer().min(1).max(5).default(5),
  text: Joi.string().min(10).required(),
  company: Joi.string().allow("").optional().allow(null),
  website: Joi.string().allow("").optional().allow(null),
  country: Joi.string().allow("").optional().allow(null),
  initials: Joi.string().allow("").optional().allow(null),
  title: Joi.string().allow("").optional().allow(null),
  sortOrder: Joi.number().integer().optional().allow(null),
  isActive: Joi.boolean().default(true),
});

const update = create.fork(
  ["name", "role", "rating", "text", "company", "website", "country", "initials", "title", "sortOrder", "isActive"],
  (field) => field.optional()
);

module.exports = { create, update };

