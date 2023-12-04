import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import productsRouter from './routes/productsRoutes.js';
import ordersRouter from './routes/ordersRoutes.js';

import './database/database.js';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/v1/products', productsRouter);
app.use('/api/v1/orders', ordersRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
