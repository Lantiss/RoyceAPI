const Joi = require("joi");

const listUserValidation = async (req, res, next) => {
  try {
    const schemaQuery = Joi.object({
      page: Joi.number().default(0),
    }).options({ abortEarly: false });
    await schemaQuery.validateAsync(req.query);
    next();
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

module.exports = { listUserValidation };
