import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateEspacioInput } from './create-espacio.input';
@InputType()
export class UpdateEspacioInput extends PartialType(CreateEspacioInput) {
  @Field(() => Int)
  id: number;
}
