const Joi = require("joi");

const create = Joi.object({
  firstName: Joi.string().trim().min(1).required(),
  email: Joi.string().trim().email().required(),
  phone: Joi.string().trim().allow("", null),
  subject: Joi.string().trim().allow("", null),
  message: Joi.string().trim().min(1).required(),
});

module.exports = { create };
