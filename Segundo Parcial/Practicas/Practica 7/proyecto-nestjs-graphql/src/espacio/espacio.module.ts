import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspacioService } from './espacio.service';
import { EspacioResolver } from './espacio.resolver';
import { Espacio } from './espacio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Espacio])],
  providers: [EspacioService, EspacioResolver],
})
export class EspacioModule {}
