import express from 'express';

import {} from '../controllers/productControllers.js';
import { post_orderSchema } from '../helpers/validationSchemas/orderSchemas.js';
import { validateBody } from '../middlewares/validateBody.js';
import { getOrders, postOrder } from '../controllers/orderControllers.js';

const router = express.Router();

router.get('/', getOrders);

router.post(
  '/',
  (req, res, next) => validateBody(req, res, next, post_orderSchema),
  postOrder,
);

export default router;
