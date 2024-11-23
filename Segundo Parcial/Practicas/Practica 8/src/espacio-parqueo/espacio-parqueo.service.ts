import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EspacioParqueo } from './entities/espacio-parqueo.entity';
import { CreateEspacioParqueoDto } from './dto/create-espacio-parqueo.dto';
import { UpdateEspacioParqueoDto } from './dto/update-espacio-parqueo.dto';

@Injectable()
export class EspacioParqueoService {
  constructor(
    @InjectRepository(EspacioParqueo)
    private readonly espacioParqueoRepository: Repository<EspacioParqueo>,
  ) {}

  async create(createEspacioParqueoDto: CreateEspacioParqueoDto): Promise<EspacioParqueo> {
    const espacio = this.espacioParqueoRepository.create(createEspacioParqueoDto);
    return this.espacioParqueoRepository.save(espacio);
  }

  async findAll(): Promise<EspacioParqueo[]> {
    return this.espacioParqueoRepository.find();
  }

  async findOne(id: number): Promise<EspacioParqueo> {
    return this.espacioParqueoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateEspacioParqueoDto: UpdateEspacioParqueoDto): Promise<EspacioParqueo> {
    await this.espacioParqueoRepository.update(id, updateEspacioParqueoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.espacioParqueoRepository.delete(id);
  }
}
