import Joi from 'joi';

export const post_userSchema = Joi.object({
  firstname: Joi.string().trim().min(3).max(30)
    .required()
    .messages({
      'string.min': 'The firstname field must be at least 3 characters',
      'string.max': 'The firstname field must be at most 30 characters',
      'any.required': 'El campo firstname es requerido',
      '*': 'Check the firstname field',
    }),
  username: Joi.string().trim().min(3).max(30)
    .required()
    .messages({
      'string.min': 'The firstname field must be at least 3 characters',
      'string.max': 'The firstname field must be at most 30 characters',
      'any.required': 'The username field is required',
      '*': 'Check the username field',
    }),
  lastname: Joi.string().trim().min(3).max(30)
    .required()
    .messages({
      'string.min': 'The firstname field must be at least 3 characters',
      'string.max': 'The firstname field must be at most 30 characters',
      'any.required': 'The lastname field is required',
      '*': 'Check the lastname field',
    }),
  password: Joi.string()
    .trim()
    .min(3)
    .max(30)
    .required()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
    )
    .messages({
      'string.min': 'The firstname field must be at least 3 characters',
      'string.max': 'The firstname field must be at most 30 characters',
      'any.required': 'The password field is required',
      'string.pattern.base':
        'The "password" field must have at least one number, one letter and one special character',
      '*': 'Check the password field',
    }),
});

export const put_userSchema = Joi.object({
  firstname: Joi.string().trim().min(3).max(30)
    .messages({
      'string.min': 'The firstname field must be at least 3 characters',
      'string.max': 'The firstname field must be at most 30 characters',
      '*': 'Check the firstname field',
    }),
  username: Joi.string().trim().min(3).max(30)
    .messages({
      'string.min': 'The firstname field must be at least 3 characters',
      'string.max': 'The firstname field must be at most 30 characters',
      '*': 'Check the username field',
    }),
  lastname: Joi.string().trim().min(3).max(30)
    .messages({
      'string.min': 'The firstname field must be at least 3 characters',
      'string.max': 'The firstname field must be at most 30 characters',
      '*': 'Check the lastname field',
    }),
  password: Joi.string()
    .trim()
    .min(3)
    .max(30)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
    )
    .messages({
      'string.min': 'The firstname field must be at least 3 characters',
      'string.max': 'The firstname field must be at most 30 characters',
      'string.pattern.base':
        'The "password" field must have at least one number, one letter and one special character',
      '*': 'Check the password field',
    }),
}).custom((value, helper) => {
  const {
    firstname, lastname, username, password,
  } = value;

  if (!firstname && !lastname && !username && !password) {
    return helper.message('At least one field must be present in the body');
  }

  return true;
});