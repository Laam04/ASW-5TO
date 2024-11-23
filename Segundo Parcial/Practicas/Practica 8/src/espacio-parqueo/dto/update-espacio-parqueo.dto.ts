import { PartialType } from '@nestjs/mapped-types';
import { CreateEspacioParqueoDto } from './create-espacio-parqueo.dto';

export class UpdateEspacioParqueoDto extends PartialType(CreateEspacioParqueoDto) {}