import { AppDataSource } from '../ormconfig';
import { Parquear } from '../entities/parquear';

export const parquearRepository = AppDataSource.getRepository(Parquear);
