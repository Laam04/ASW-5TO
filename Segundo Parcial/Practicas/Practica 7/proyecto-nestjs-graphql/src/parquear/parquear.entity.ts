import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Vehiculo } from '../vehiculo/vehiculo.entity';
import { Espacio } from '../espacio/espacio.entity';

@ObjectType()
@Entity()
export class Parquear {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Vehiculo)
  @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo.parqueos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'vehiculoId' })
  vehiculo: Vehiculo;

  @Field(() => Espacio)
  @ManyToOne(() => Espacio, (espacio) => espacio.parqueos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'espacioId' })
  espacio: Espacio;

  @Field()
  @Column()
  fechaEntrada: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  fechaSalida?: Date;
}
