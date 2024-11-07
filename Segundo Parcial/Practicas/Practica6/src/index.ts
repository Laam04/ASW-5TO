import express from 'express';
import cors from 'cors';
import { AppDataSource } from './ormconfig';
import parquearRoutes from './routes/parquearroutes';
import vehiculoRoutes from './routes/vehiculoroutes';
import espacioRoutes from './routes/espacioroutes';
import usuarioRoutes from './routes/usuarioroutes';
import dotenv from 'dotenv';
import 'reflect-metadata';

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization'
}));

app.use(express.json());

const apiPrefix = '/api/v1';
app.use(`${apiPrefix}/parquear`, parquearRoutes);
app.use(`${apiPrefix}/vehiculo`, vehiculoRoutes);
app.use(`${apiPrefix}/espacio`, espacioRoutes);
app.use(`${apiPrefix}/usuario`, usuarioRoutes);

AppDataSource.initialize()
    .then(() => {
        console.log('Conexión con la base de datos establecida');
        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en el puerto ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error de conexión a la base de datos:', error);
    });
