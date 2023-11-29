import express from 'express';
import { getProducts, postProducts } from '../controllers/productControllers.js';

const router = express.Router();

// GET
router.get('/', getProducts);

// POST
router.post('/', postProducts);

export default router;
