import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// conexion con la DB
import './database/database.js';

// 1. Inicio la app
const app = express();

// 2. Configuraciones generales
const PORT = process.env.PORT || 5000;

// 3. Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// // 4.Rutas
// app.use('/api/v1/blogs', productsRouter);

// 5. Iniciar el loop del servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
