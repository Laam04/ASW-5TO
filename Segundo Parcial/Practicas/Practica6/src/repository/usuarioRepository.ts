import { AppDataSource } from '../ormconfig';
import { Usuario } from '../entities/usuario';

export const usuarioRepository = AppDataSource.getRepository(Usuario);
