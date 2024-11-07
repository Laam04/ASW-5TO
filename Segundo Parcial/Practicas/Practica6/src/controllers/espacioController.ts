import { Request, Response } from 'express';
import { AppDataSource } from '../ormconfig';
import { Espacio } from '../entities/espacio';

export class EspacioController {
    async crearEspacio(req: Request, res: Response) {
        const espacioRepository = AppDataSource.getRepository(Espacio);
        const nuevoEspacio = espacioRepository.create(req.body);
        await espacioRepository.save(nuevoEspacio);
        res.status(201).json(nuevoEspacio);
    }

    async obtenerEspacios(req: Request, res: Response) {
        const espacioRepository = AppDataSource.getRepository(Espacio);
        const espacios = await espacioRepository.find();
        res.json(espacios);
    }

    async obtenerEspacioPorId(req: Request, res: Response) {
        const espacioRepository = AppDataSource.getRepository(Espacio);
        const espacio = await espacioRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!espacio) {
            return res.status(404).json({ message: 'Espacio de parqueo no encontrado' });
        }
        res.json(espacio);
    }

    async actualizarEspacio(req: Request, res: Response) {
        const espacioRepository = AppDataSource.getRepository(Espacio);
        const { id } = req.params;
        const resultado = await espacioRepository.update(id, req.body);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Espacio de parqueo no encontrado' });
        }
        res.json({ message: 'Espacio de parqueo actualizado' });
    }

    async eliminarEspacio(req: Request, res: Response) {
        const espacioRepository = AppDataSource.getRepository(Espacio);
        const resultado = await espacioRepository.delete(req.params.id);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Espacio de parqueo no encontrado' });
        }
        res.json({ message: 'Espacio de parqueo eliminado' });
    }
}
