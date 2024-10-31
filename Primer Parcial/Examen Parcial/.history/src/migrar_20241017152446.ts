import connectDB from './database';
import { Vehiculo } from './models/Vehiculo';
import { Espacio } from './models/Espacio';
import { Parking } from './models/Parking';
import mongoose from 'mongoose';

const datos = {
    vehiculos: [
        { descripcion: 'Sedan', placa: 'ABC123', color: 'Rojo' },
        { descripcion: 'SUV', placa: 'DEF456', color: 'Azul' },
        { descripcion: 'Coupé', placa: 'GHI789', color: 'Verde' },
        { descripcion: 'Convertible', placa: 'JKL012', color: 'Amarillo' },
        { descripcion: 'Furgoneta', placa: 'MNO345', color: 'Negro' }
    ],
    espacios: [
        { descripcion: 'Espacio 1' },
        { descripcion: 'Espacio 2' },
        { descripcion: 'Espacio 3' },
        { descripcion: 'Espacio 4' },
        { descripcion: 'Espacio 5' }
    ],
    parking: [
        { idVehiculo: null, idEspacio: null, fechaEntrada: new Date(), fechaSalida: new Date() },
        { idVehiculo: null, idEspacio: null, fechaEntrada: new Date(), fechaSalida: new Date() },
        { idVehiculo: null, idEspacio: null, fechaEntrada: new Date(), fechaSalida: new Date() }
    ]
};

const migrarDatos = async () => {
    await connectDB();

    try {
        // Insertar Vehículos
        const vehiculosIds: any[] = [];
        for (const vehiculo of datos.vehiculos) {
            const nuevoVehiculo = new Vehiculo(vehiculo);
            const vehiculoGuardado = await nuevoVehiculo.save();
            vehiculosIds.push(vehiculoGuardado._id); // Guardar ID del vehículo
        }
        console.log('Vehículos migrados con éxito.');

        // Insertar Espacios de Parqueo
        const espaciosIds: any[] = [];
        for (const espacio of datos.espacios) {
            const nuevoEspacio = new Espacio(espacio);
            const espacioGuardado = await nuevoEspacio.save();
            espaciosIds.push(espacioGuardado._id); // Guardar ID del espacio
        }
        console.log('Espacios migrados con éxito.');

        // Insertar registros de Parking
        for (let i = 0; i < datos.parking.length; i++) {
            const nuevoRegistro = new Parking({
                idVehiculo: vehiculosIds[i % vehiculosIds.length], // Asignar un ID de vehículo
                idEspacio: espaciosIds[i % espaciosIds.length],     // Asignar un ID de espacio
                fechaEntrada: datos.parking[i].fechaEntrada,
                fechaSalida: datos.parking[i].fechaSalida
            });
            await nuevoRegistro.save();
        }
        console.log('Registros de parking migrados con éxito.');

    } catch (error) {
        console.error('Error durante la migración:', error);
    } finally {
        await mongoose.connection.close();
    }
};

// Ejecutar la migración
migrarDatos();
