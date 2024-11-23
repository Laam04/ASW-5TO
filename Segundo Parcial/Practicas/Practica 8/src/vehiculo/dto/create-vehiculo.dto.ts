// src/vehiculos/dto/create-vehiculo.dto.ts
import { IsString, IsBoolean, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateVehiculoDto {
  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsString()
  @IsNotEmpty()
  placa: string;

  @IsBoolean()
  @IsOptional()
  isAvailable?: boolean;

  @IsNumber()
  usuarioId: number;
}
