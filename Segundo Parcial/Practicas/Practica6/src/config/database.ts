import { DataSource } from 'typeorm';
import { Vehiculo } from '../entities/vehiculo';
import { Espacio } from '../entities/espacio';
import { Parquear } from '../entities/parquear';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    synchronize: true,
    entities: [Vehiculo, Espacio, Parquear],
});
