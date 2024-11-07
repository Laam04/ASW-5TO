import express from 'express';
import cors from 'cors';
import parquearRoutes from './routes/parquearroutes';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1', parquearRoutes); // Define el prefijo para la URL base

export default app;
