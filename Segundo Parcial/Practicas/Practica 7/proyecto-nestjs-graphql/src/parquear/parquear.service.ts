import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parquear } from './parquear.entity';
import { CreateParquearInput } from './dto/create-parquear.input';
import { UpdateParquearInput } from './dto/update-parquear.input';
import { Vehiculo } from '../vehiculo/vehiculo.entity';
import { Espacio } from '../espacio/espacio.entity';

@Injectable()
export class ParquearService {
  constructor(
    @InjectRepository(Parquear)
    private readonly parquearRepository: Repository<Parquear>,
    @InjectRepository(Vehiculo)
    private readonly vehiculoRepository: Repository<Vehiculo>,
    @InjectRepository(Espacio)
    private readonly espacioRepository: Repository<Espacio>,
  ) {}

  async create(createParquearInput: CreateParquearInput): Promise<Parquear> {
    const { vehiculoId, espacioId, fechaEntrada, fechaSalida } = createParquearInput;

    const vehiculo = await this.vehiculoRepository.findOne({ where: { id: vehiculoId } });
    if (!vehiculo) {
      throw new Error('Vehiculo no encontrado');
    }

    const espacio = await this.espacioRepository.findOne({ where: { id: espacioId } });
    if (!espacio) {
      throw new Error('Espacio no encontrado');
    }

    const parquear = this.parquearRepository.create({
      vehiculo,
      espacio,
      fechaEntrada,
      fechaSalida,
    });

    return this.parquearRepository.save(parquear);
  }

  findAll(): Promise<Parquear[]> {
    return this.parquearRepository.find({ relations: ['vehiculo', 'espacio'] });
  }

  findOne(id: number): Promise<Parquear> {
    return this.parquearRepository.findOne({ where: { id }, relations: ['vehiculo', 'espacio'] });
  }

  async update(id: number, updateParquearInput: UpdateParquearInput): Promise<Parquear> {
    const parquear = await this.parquearRepository.findOne({ where: { id } });
    if (!parquear) {
      throw new Error('Registro de parquear no encontrado');
    }

    Object.assign(parquear, updateParquearInput);
    return this.parquearRepository.save(parquear);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.parquearRepository.delete(id);
    return result.affected > 0;
  }
}
