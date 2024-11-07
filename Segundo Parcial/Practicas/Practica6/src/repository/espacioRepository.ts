import { AppDataSource } from '../ormconfig';
import { Espacio } from '../entities/espacio';

export const espacioRepository = AppDataSource.getRepository(Espacio);
