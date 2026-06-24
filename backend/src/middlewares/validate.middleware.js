// Wraps a Joi schema into Express middleware.
// On failure: 422 { success: false, errors: [{ field, message }] }
// On success: replaces req.body with the validated (and defaulted) value.

function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const errors = error.details.map((d) => ({
        field: d.path.join("."),
        message: d.message.replace(/"/g, ""),
      }));
      return res.status(422).json({ success: false, errors });
    }

    req.body = value;
    return next();
  };
}

module.exports = validate;
