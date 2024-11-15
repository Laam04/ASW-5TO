import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parquear } from './parquear.entity';
import { ParquearService } from './parquear.service';
import { ParquearResolver } from './parquear.resolver';
import { Vehiculo } from '../vehiculo/vehiculo.entity';
import { Espacio } from '../espacio/espacio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parquear, Vehiculo, Espacio])],
  providers: [ParquearService, ParquearResolver],
})
export class ParquearModule {}
