import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Espacio } from './espacio.entity';
import { CreateEspacioInput } from './dto/create-espacio.input';
import { UpdateEspacioInput } from './dto/update-espacio.input';

@Injectable()
export class EspacioService {
  constructor(
    @InjectRepository(Espacio)
    private espacioRepository: Repository<Espacio>,
  ) {}

  async create(createEspacioInput: CreateEspacioInput): Promise<Espacio> {
    const espacio = this.espacioRepository.create(createEspacioInput);
    return this.espacioRepository.save(espacio);
  }

  async findAll(): Promise<Espacio[]> {
    return this.espacioRepository.find();
  }

  async update(updateEspacioInput: UpdateEspacioInput): Promise<Espacio> {
    await this.espacioRepository.update(updateEspacioInput.id, updateEspacioInput);
    return this.espacioRepository.findOneBy({ id: updateEspacioInput.id });
  }
}
