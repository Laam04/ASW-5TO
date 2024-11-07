import { AppDataSource } from '../ormconfig';
import { Vehiculo } from '../entities/vehiculo';

export const vehiculoRepository = AppDataSource.getRepository(Vehiculo);
