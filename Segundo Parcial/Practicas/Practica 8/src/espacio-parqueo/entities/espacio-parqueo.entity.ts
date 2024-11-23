import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Parquear } from '../../parquear/entities/parquear.entity';

@Entity('espacios_parqueo')
export class EspacioParqueo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  descripcion: string;

  @OneToMany(() => Parquear, (parquear) => parquear.espacioParqueo)
  parqueos: Parquear[];
}
