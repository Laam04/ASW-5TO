import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EspacioModule } from './espacio/espacio.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { ParquearModule } from './parquear/parquear.module';
import { UsuarioModule } from './usuario/usuario.module';
import { typeOrmConfig } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,   
      autoSchemaFile: true,             
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    EspacioModule,
    VehiculoModule,
    ParquearModule,
    UsuarioModule,
  ],
})
export class AppModule {}
