const Joi = require("joi");

const getUserByIdValidation = async (req, res, next) => {
  try {
    const schemaParam = Joi.object({
      id: Joi.number().required(),
    }).options({ abortEarly: false });
    await schemaParam.validateAsync(req.params);
    next();
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

module.exports = { getUserByIdValidation };
