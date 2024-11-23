import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEspacioParqueoDto {
  @IsString()
  @IsNotEmpty()
  descripcion: string;
}
