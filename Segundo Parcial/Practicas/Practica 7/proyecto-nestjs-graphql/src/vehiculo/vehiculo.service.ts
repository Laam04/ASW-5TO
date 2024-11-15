import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehiculo } from './vehiculo.entity';
import { CreateVehiculoInput } from './dto/create-vehiculo.input';
import { UpdateVehiculoInput } from './dto/update-vehiculo.input';

@Injectable()
export class VehiculoService {
  constructor(
    @InjectRepository(Vehiculo)
    private vehiculoRepository: Repository<Vehiculo>,
  ) {}

  async create(createVehiculoInput: CreateVehiculoInput): Promise<Vehiculo> {
    const vehiculo = this.vehiculoRepository.create(createVehiculoInput);
    return this.vehiculoRepository.save(vehiculo);
  }

  async findAll(): Promise<Vehiculo[]> {
    return this.vehiculoRepository.find();
  }

  async findOne(id: number): Promise<Vehiculo> {
    return this.vehiculoRepository.findOneBy({ id });
  }

  async update(updateVehiculoInput: UpdateVehiculoInput): Promise<Vehiculo> {
    const vehiculo = await this.vehiculoRepository.findOneBy({ id: updateVehiculoInput.id });
    if (!vehiculo) throw new Error('Vehículo no encontrado');

    Object.assign(vehiculo, updateVehiculoInput);
    return this.vehiculoRepository.save(vehiculo);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.vehiculoRepository.delete(id);
    return result.affected > 0;
  }
}
