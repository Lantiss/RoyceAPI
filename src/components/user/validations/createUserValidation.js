const Joi = require("joi").extend(require("@joi/date"));

const createUserValidation = async (req, res, next) => {
  try {
    const schemaBody = Joi.object({
      name: Joi.string().required(),
      dob: Joi.date().format("DD-MM-YYYY").required(),
      address: Joi.string().required(),
      description: Joi.string().required(),
    }).options({ abortEarly: false });
    await schemaBody.validateAsync(req.body);
    next();
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

module.exports = { createUserValidation };
