import { Request, Response } from 'express';
import { AppDataSource } from '../ormconfig';
import { Parquear } from '../entities/parquear';
import { Vehiculo } from '../entities/vehiculo';
import { Espacio } from '../entities/espacio';

export class ParquearController {
    async crearParqueo(req: Request, res: Response) {
        const parquearRepository = AppDataSource.getRepository(Parquear);
        const vehiculoRepository = AppDataSource.getRepository(Vehiculo);
        const espacioRepository = AppDataSource.getRepository(Espacio);

        const { vehiculoId, espacioId, fechaHoraEntrada, fechaHoraSalida } = req.body;
        const vehiculo = await vehiculoRepository.findOneBy({ id: vehiculoId });
        const espacio = await espacioRepository.findOneBy({ id: espacioId });

        if (!vehiculo || !espacio) {
            return res.status(400).json({ message: 'Vehículo o espacio no encontrado' });
        }

        const nuevoParqueo = parquearRepository.create({
            vehiculo,
            espacio,
            fechaHoraEntrada,
            fechaHoraSalida,
        });

        await parquearRepository.save(nuevoParqueo);
        return res.status(201).json(nuevoParqueo);
    }

    async obtenerParqueos(req: Request, res: Response) {
        const parquearRepository = AppDataSource.getRepository(Parquear);
        const parqueos = await parquearRepository.find({ relations: ['vehiculo', 'espacio'] });
        res.json(parqueos);
    }

    async obtenerParqueoPorId(req: Request, res: Response) {
        const parquearRepository = AppDataSource.getRepository(Parquear);
        const parqueo = await parquearRepository.findOne({
            where: { id: parseInt(req.params.id) },
            relations: ['vehiculo', 'espacio']
        });

        if (!parqueo) {
            return res.status(404).json({ message: 'Parqueo no encontrado' });
        }
        res.json(parqueo);
    }

    async actualizarParqueo(req: Request, res: Response) {
        const parquearRepository = AppDataSource.getRepository(Parquear);
        const { id } = req.params;
        const resultado = await parquearRepository.update(id, req.body);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Parqueo no encontrado' });
        }
        res.json({ message: 'Parqueo actualizado' });
    }

    async eliminarParqueo(req: Request, res: Response) {
        const parquearRepository = AppDataSource.getRepository(Parquear);
        const resultado = await parquearRepository.delete(req.params.id);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Parqueo no encontrado' });
        }
        res.json({ message: 'Parqueo eliminado' });
    }
}
