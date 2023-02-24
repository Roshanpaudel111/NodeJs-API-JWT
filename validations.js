const Joi = require("joi");

// Registration Validations
module.exports.registrationValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(data);
};

// Login Validations
module.exports.registrationValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(data);
};
