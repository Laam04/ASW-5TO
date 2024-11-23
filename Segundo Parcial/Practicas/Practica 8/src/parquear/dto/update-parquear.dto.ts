import { PartialType } from '@nestjs/mapped-types';
import { CreateParquearDto } from './create-parquear.dto';

export class UpdateParquearDto extends PartialType(CreateParquearDto) {}
