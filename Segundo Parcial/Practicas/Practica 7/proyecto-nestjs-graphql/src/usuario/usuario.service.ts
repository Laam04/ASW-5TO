import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioInput: CreateUsuarioInput): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(createUsuarioInput);
    return this.usuarioRepository.save(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOneBy({ id });
  }

  async update(updateUsuarioInput: UpdateUsuarioInput): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ id: updateUsuarioInput.id });
    if (!usuario) throw new Error('Usuario no encontrado');

    Object.assign(usuario, updateUsuarioInput);
    return this.usuarioRepository.save(usuario);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.usuarioRepository.delete(id);
    return result.affected > 0;
  }
}
