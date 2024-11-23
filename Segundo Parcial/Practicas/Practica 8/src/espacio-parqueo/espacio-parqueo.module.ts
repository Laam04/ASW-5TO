import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspacioParqueo } from './entities/espacio-parqueo.entity';
import { EspacioParqueoController } from './espacio-parqueo.controller';
import { EspacioParqueoService } from './espacio-parqueo.service';

@Module({
  imports: [TypeOrmModule.forFeature([EspacioParqueo])],
  controllers: [EspacioParqueoController],
  providers: [EspacioParqueoService],
})
export class EspacioParqueoModule {}
