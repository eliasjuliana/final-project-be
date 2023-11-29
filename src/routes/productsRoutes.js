import express from 'express';
import { deleteProduct, getProducts, postProducts, putProduct } from '../controllers/productControllers.js';

const router = express.Router();

// GET
router.get('/', getProducts);

// POST
router.post('/', postProducts);

// PUT
router.put('/:id', putProduct);

// DELETE
router.delete('/:id', deleteProduct);

export default router;
