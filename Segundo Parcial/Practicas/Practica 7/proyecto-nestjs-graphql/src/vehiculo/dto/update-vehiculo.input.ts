import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateVehiculoInput } from './create-vehiculo.input';

@InputType()
export class UpdateVehiculoInput extends PartialType(CreateVehiculoInput) {
  @Field(() => Int)
  id: number;
}
