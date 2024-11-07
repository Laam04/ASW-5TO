import { DataSource } from 'typeorm';
import { Parquear } from './entities/parquear';
import { Vehiculo } from './entities/vehiculo';
import { Espacio } from './entities/espacio';
import { Usuario } from './entities/usuario';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './database.sqlite',
    synchronize: true,
    entities: [Usuario, Parquear, Vehiculo, Espacio],
    logging: true,
});
