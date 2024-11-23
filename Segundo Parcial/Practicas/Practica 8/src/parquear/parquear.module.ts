import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParquearController } from './parquear.controller';
import { ParquearService } from './parquear.service';
import { Parquear } from './entities/parquear.entity';
import { Vehiculo } from '../vehiculo/entities/vehiculo.entity';
import { EspacioParqueo } from '../espacio-parqueo/entities/espacio-parqueo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parquear, Vehiculo, EspacioParqueo])],
  controllers: [ParquearController],
  providers: [ParquearService],
})
export class ParquearModule {}
