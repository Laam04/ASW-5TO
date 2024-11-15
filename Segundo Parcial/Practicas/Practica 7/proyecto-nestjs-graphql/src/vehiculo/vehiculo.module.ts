import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculoService } from './vehiculo.service';
import { VehiculoResolver } from './vehiculo.resolver';
import { Vehiculo } from './vehiculo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehiculo])],
  providers: [VehiculoService, VehiculoResolver],
})
export class VehiculoModule {}
