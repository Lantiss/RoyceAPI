const Joi = require("joi").extend(require("@joi/date"));

const createUserValidation = async (req, res, next) => {
  try {
    const schemaBody = Joi.object({
      name: Joi.string().max(20).required(),
      dob: Joi.date().format("DD-MM-YYYY").required(),
      address: Joi.string().max(50).required(),
      description: Joi.string().max(100).required(),
    }).options({ abortEarly: false });
    await schemaBody.validateAsync(req.body);
    next();
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

module.exports = { createUserValidation };
