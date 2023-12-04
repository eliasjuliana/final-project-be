import Joi from 'joi';

export const post_productSchema = Joi.object({
  name: Joi.string().trim().min(3).max(30)
  .required()
  .messages({
    'string.min': 'The "name" field must have at least 3 characters',
    'string.max': 'The "name" field must not exceed 30 characters',
    'any.required': 'The "name" field is required ',
    '*': 'Check the "name" field',
  }),
  image: Joi.string().uri().trim().required()
  .messages({
    'string.uri': 'The "image" field must be a valid url',
    'any.required': 'The "image" field is required',
    '*': 'Check the "image" field',
  }),
  price: Joi.number().required().messages({
    'any.required': 'The "price" field is required',
    '*': 'Check the "price" field',
  }),
  description: Joi.string().trim().min(3).max(100)
  .required()
  .messages({
    'string.min': 'The "description" field must have at least 3 characters',
    'string.max': 'The "description" field must have at least 3 characters',
    'any.required': 'The "description" field is required',
    '*': 'Check the "description" field',
  }),
  // amount: Joi.number().messages({
  //   '*': 'Check the "amount" field',
  // }),
});

export const put_productSchema = Joi.object({
  name: Joi.string().trim().min(3).max(30)
  .messages({
    'string.min': 'The "name" field must have at least 3 characters',
    'string.max': 'The "name" field must not exceed 30 characters',
    'any.required': 'The "name" field is required ',
    '*': 'Check the "name" field',
  }),
  image: Joi.string().uri().trim()
  .messages({
    'string.uri': 'The "image" field must be a valid url',
    'any.required': 'The "image" field is required',
    '*': 'Check the "image" field',
  }),
  price: Joi.number().messages({
    'any.required': 'The "price" field is required',
    '*': 'Check the "price" field',
  }),
  description: Joi.string().trim().min(3).max(100)
  .messages({
    'string.min': 'The "description" field must have at least 3 characters',
    'string.max': 'The "description" field must have at least 3 characters',
    'any.required': 'The "description" field is required',
    '*': 'Check the "description" field',
  }),
  amount: Joi.number().messages({
    'any.required': 'The "amount" field is required',
    '*': 'Check the "amount" field',
  }),
  isAvailable: Joi.boolean().messages({
    '*': 'Check the "amount" field',
  }),
}).custom((value, helper) => {
  const {
    name, image, price, description, isAvailable,
} = value;

  if (!name && !image && !price && !description && !isAvailable) {
    return helper.message('At least one field must be present in the body');
  }

  return true;
});
