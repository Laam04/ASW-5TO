import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateVehiculoInput {
  @Field(() => String)
  placa: string;

  @Field(() => String)
  color: string;

  @Field(() => String)
  descripcion: string; 
}
