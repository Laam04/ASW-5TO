import { Injectable } from '@nestjs/common';
import { Parquear } from './entities/parquear.entity';
import { CreateParquearDto } from './dto/create-parquear.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ParquearService {
  constructor(
    @InjectRepository(Parquear)
    private parquearRepository: Repository<Parquear>,
  ) {}

  async create(createParquearDto: CreateParquearDto): Promise<Parquear> {
    const nuevaTransaccion = this.parquearRepository.create(createParquearDto);
    return await this.parquearRepository.save(nuevaTransaccion);
  }

  async findAll(): Promise<Parquear[]> {
    return await this.parquearRepository.find();
  }

  async getTransaccionesActivas(): Promise<Parquear[]> {
    return await this.parquearRepository.find({
      where: { fechaHoraSalida: null },
    });
  }
}
