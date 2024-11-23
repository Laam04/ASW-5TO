import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { VehiculosService } from './vehiculo.service';

@WebSocketGateway({ cors: true })
export class VehiculosGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly vehiculosService: VehiculosService) {}

  @SubscribeMessage('vehiculo-create')
  async createVehiculo(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    const vehiculo = await this.vehiculosService.create(data);
    this.server.emit('vehiculo-created', vehiculo);
  }

  @SubscribeMessage('vehiculo-get-all')
  async getAllVehiculos(@ConnectedSocket() client: Socket) {
    const vehiculos = await this.vehiculosService.findAll();
    client.emit('vehiculos-list', vehiculos);
  }
  @SubscribeMessage('listar-vehiculos')
async handleListarVehiculos(@ConnectedSocket() client: Socket) {
  const vehiculos = await this.vehiculosService.findAll(); // Supongamos que `findAll` lista todos los vehículos
  client.emit('vehiculos-listados', {
    message: 'Listado de vehículos obtenidos correctamente',
    vehiculos,
  });
}

}
