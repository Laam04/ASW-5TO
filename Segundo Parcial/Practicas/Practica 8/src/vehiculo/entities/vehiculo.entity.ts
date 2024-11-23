import {Entity,PrimaryGeneratedColumn,Column,OneToMany,} from 'typeorm';
import { Parquear } from '../../parquear/entities/parquear.entity';

@Entity('vehiculos')
export class Vehiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  descripcion: string;

  @Column({ type: 'varchar', length: 255 })
  placa: string;

  @Column({ type: 'varchar', length: 50 })
  color: string;

  @OneToMany(() => Parquear, (parquear) => parquear.vehiculo)
  parqueos: Parquear[];
}
