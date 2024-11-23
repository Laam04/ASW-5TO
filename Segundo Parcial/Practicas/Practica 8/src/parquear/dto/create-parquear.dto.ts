import { Transform } from 'class-transformer';
import { IsNotEmpty, IsDate, IsNumber } from 'class-validator';

export class CreateParquearDto {
  @IsNumber()
  @IsNotEmpty()
  vehiculoId: number;

  @IsNumber()
  @IsNotEmpty()
  espacioParqueoId: number;

  @IsDate()
  @IsNotEmpty()
  @Transform(({ value }) => {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date format');
    }
    return date;
  })
  fechaHoraEntrada: Date;

  @IsDate()
  @IsNotEmpty()
  @Transform(({ value }) => {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date format');
    }
    return date;
  })
  fechaHoraSalida: Date;
}
