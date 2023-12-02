import express from 'express';
import { postLogin } from '../controllers/authController.js';
import { validateBody } from '../middlewares/validateBody.js';
import { post_loginSchema } from '../helpers/validationSchemas/loginSchemas.js';

const router = express.Router();

router.post('/login', (req, res, next) => validateBody(req, res, next, post_loginSchema), postLogin);

export default router;
