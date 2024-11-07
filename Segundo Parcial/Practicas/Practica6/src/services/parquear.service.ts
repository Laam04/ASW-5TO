import { AppDataSource } from '../config/database';
import { Parquear } from '../entities/parquear';
import { Repository } from 'typeorm';

export class ParquearService {
  private parquearRepository: Repository<Parquear>;

  constructor() {
    this.parquearRepository = AppDataSource.getRepository(Parquear);
  }

  async create(parquearData: Parquear): Promise<Parquear> {
    return await this.parquearRepository.save(parquearData);
  }

  async findAll(): Promise<Parquear[]> {
    return await this.parquearRepository.find();
  }

  async findOne(id: number): Promise<Parquear | null> {
    return await this.parquearRepository.findOne({ where: { id } });
  }

  async update(id: number, parquearData: Partial<Parquear>): Promise<Parquear | null> {
    await this.parquearRepository.update(id, parquearData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.parquearRepository.delete(id);
  }
}
