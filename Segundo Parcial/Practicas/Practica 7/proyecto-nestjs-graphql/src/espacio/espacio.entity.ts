import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Parquear } from '../parquear/parquear.entity';

@ObjectType()
@Entity()
export class Espacio {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  descripcion: string;

  @Field(() => [Parquear], { nullable: true })
  @OneToMany(() => Parquear, (parquear) => parquear.espacio)
  parqueos?: Parquear[];
}
