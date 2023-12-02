import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import productsRouter from './routes/productsRoutes.js';
import ordersRouter from './routes/ordersRoutes.js';

// conexion con la DB
import './database/database.js';

// 1. Inicio la app
const app = express();

// 2. Configuraciones generales
const PORT = process.env.PORT || 4000;

// 3. Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// // 4.Rutas
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/orders', ordersRouter);

// 5. Iniciar el loop del servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
