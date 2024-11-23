import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { VehiculosModule } from './vehiculo/vehiculo.module';
import { EspacioParqueoModule } from './espacio-parqueo/espacio-parqueo.module';
import { ParquearModule } from './parquear/parquear.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
    UsuariosModule,
    VehiculosModule,
    EspacioParqueoModule,
    ParquearModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
