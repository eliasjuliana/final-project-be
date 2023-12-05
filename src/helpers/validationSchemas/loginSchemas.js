import Joi from 'joi';

export const post_loginSchema = Joi.object({
    email: Joi.string()
    .trim()
    .required()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .messages({
      'any.required': 'The email field is required',
      'string.pattern.base': 'The "email" field must be an email',
      '*': 'Check the email field',
    }),
    password: Joi.string()
    .trim()
    .min(3)
    .max(30)
    .required()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(.{8,})$/,
    )
    .messages({
      'string.min': 'The firstname field must be at least 3 characters',
      'string.max': 'The firstname field must be at most 30 characters',
      'any.required': 'The password field is required',
      'string.pattern.base':
        'The "password" field must have at least one number, one lowercase letter, one uppercase letter,one special character and at least 8 characters',
      '*': 'Check the password field',
    }),
  });
