import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,JoinColumn,} from 'typeorm';
  import { Vehiculo } from '../../vehiculo/entities/vehiculo.entity';
  import { EspacioParqueo } from '../../espacio-parqueo/entities/espacio-parqueo.entity';
  
  @Entity('parqueos')
  export class Parquear {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo.parqueos, { eager: true })
    @JoinColumn({ name: 'vehiculo_id' })
    vehiculo: Vehiculo;
  
    @ManyToOne(() => EspacioParqueo, (espacioParqueo) => espacioParqueo.parqueos, { eager: true })
    @JoinColumn({ name: 'espacio_parqueo_id' })
    espacioParqueo: EspacioParqueo;
  
    @Column({ type: 'datetime', nullable: false })
    fechaHoraEntrada: Date;
  
    @Column({ type: 'datetime', nullable: true })
    fechaHoraSalida: Date;
  }
  