import { Router } from 'express';
import { ParquearController } from '../controllers/parquearController';

const router = Router();
const parquearController = new ParquearController();

router.post('/', parquearController.crearParqueo);
router.get('/', parquearController.obtenerParqueos);
router.get('/:id', parquearController.obtenerParqueoPorId);
router.patch('/:id', parquearController.actualizarParqueo);
router.delete('/:id', parquearController.eliminarParqueo);

export default router;
