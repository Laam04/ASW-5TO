import { Request, Response } from 'express';
import { AppDataSource } from '../ormconfig';
import { Usuario } from '../entities/usuario';

export class UsuarioController {
    async crearUsuario(req: Request, res: Response) {
        const usuarioRepository = AppDataSource.getRepository(Usuario);
        const nuevoUsuario = usuarioRepository.create(req.body);
        await usuarioRepository.save(nuevoUsuario);
        res.status(201).json(nuevoUsuario);
    }

    async obtenerUsuarios(req: Request, res: Response) {
        const usuarioRepository = AppDataSource.getRepository(Usuario);
        const usuarios = await usuarioRepository.find();
        res.json(usuarios);
    }

    async obtenerUsuarioPorId(req: Request, res: Response) {
        const usuarioRepository = AppDataSource.getRepository(Usuario);
        const usuario = await usuarioRepository.findOneBy({ id: Number(req.params.id) });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(usuario);
    }

    async actualizarUsuario(req: Request, res: Response) {
        const usuarioRepository = AppDataSource.getRepository(Usuario);
        const resultado = await usuarioRepository.update(req.params.id, req.body);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario actualizado' });
    }

    async eliminarUsuario(req: Request, res: Response) {
        const usuarioRepository = AppDataSource.getRepository(Usuario);
        const resultado = await usuarioRepository.delete(req.params.id);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado' });
    }
}
