import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateParquearInput } from './create-parquear.input';

@InputType()
export class UpdateParquearInput extends PartialType(CreateParquearInput) {
  @Field(() => Int)
  id: number;
}
