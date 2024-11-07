import { Router } from 'express';
import { usuarioRepository } from '../repository/usuarioRepository';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { verificarToken } from '../middleware/authMiddleware'; 

const router = Router();
const JWT_SECRET = '12345'; 
router.post('/register', async (req, res) => {
    try {
        const { nombre, email, clave } = req.body;

        const hashedPassword = await bcrypt.hash(clave, 10);

        const nuevoUsuario = usuarioRepository.create({
            nombre,
            email,
            clave: hashedPassword,
            estado: 'Activo',
        });

        await usuarioRepository.save(nuevoUsuario);
        res.status(201).json({ message: 'Usuario registrado', id: nuevoUsuario.id });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario', error });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, clave } = req.body;
        const usuario = await usuarioRepository.findOneBy({ email });

        if (!usuario || !(await bcrypt.compare(clave, usuario.clave))) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ id: usuario.id, estado: usuario.estado }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
});

router.get('/perfil', verificarToken, async (req, res) => {

    res.json(req.body.usuario);
});

export default router;
