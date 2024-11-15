import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Espacio } from '../espacio/espacio.entity';
import { Parquear } from '../parquear/parquear.entity';
import { Usuario } from '../usuario/usuario.entity';
import { Vehiculo } from '../vehiculo/vehiculo.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [Espacio, Parquear, Usuario, Vehiculo],
  synchronize: true,
};
