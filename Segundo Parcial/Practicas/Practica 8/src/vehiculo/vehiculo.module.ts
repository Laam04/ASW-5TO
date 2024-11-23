import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehiculo } from './entities/vehiculo.entity';
import { VehiculosService } from './vehiculo.service';
import { VehiculosController } from './vehiculo.controller';
import { VehiculosGateway } from './vehiculo.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Vehiculo])],
  controllers: [VehiculosController],
  providers: [VehiculosService, VehiculosGateway],
  exports: [VehiculosService],
})
export class VehiculosModule {}
