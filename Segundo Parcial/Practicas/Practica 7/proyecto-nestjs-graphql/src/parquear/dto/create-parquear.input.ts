import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, IsISO8601 } from 'class-validator';

@InputType()
export class CreateParquearInput {
  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  vehiculoId: number;

  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  espacioId: number;

  @Field()
  @IsISO8601()
  fechaEntrada: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsISO8601()
  fechaSalida?: Date;
}
