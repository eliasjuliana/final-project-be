import express from 'express';
import {
  deleteProduct,
  getProducts,
  postProducts,
  putProduct,
} from '../controllers/productControllers.js';
import { post_productSchema, put_productSchema } from '../helpers/validationSchemas/productSchemas.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = express.Router();

// GET
router.get('/', getProducts);

// POST
router.post(
  '/',
  (req, res, next) => validateBody(req, res, next, post_productSchema),
  postProducts,
);

// PUT
router.put(
  '/:id',
  (req, res, next) => validateBody(req, res, next, put_productSchema),
  putProduct,
);

// DELETE
router.delete('/:id', deleteProduct);

export default router;
