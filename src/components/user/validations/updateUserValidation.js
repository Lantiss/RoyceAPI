const Joi = require("joi").extend(require("@joi/date"));

const updateUserValidation = async (req, res, next) => {
  try {
    const schemaParam = Joi.object({
      id: Joi.number().required(),
    }).options({ abortEarly: false });

    const schemaBody = Joi.object({
      name: Joi.string().max(20),
      dob: Joi.date().format("DD-MM-YYYY"),
      address: Joi.string().max(50),
      description: Joi.string().max(100),
    }).min(1).message({
        "object.min": "Must have at least 1 valid attribute"
    })
    .options({ abortEarly: false });

    await schemaBody.validateAsync(req.body);
    await schemaParam.validateAsync(req.params);
    next();
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

module.exports = { updateUserValidation };
