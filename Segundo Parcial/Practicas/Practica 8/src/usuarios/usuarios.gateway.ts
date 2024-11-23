import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UsuariosService } from './usuarios.service';

@WebSocketGateway({ cors: true })
export class UsuariosGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly usuariosService: UsuariosService) {}

  @SubscribeMessage('message-to-server')
  handleMessage(@MessageBody() data: string, @ConnectedSocket() client: Socket): void {
    console.log(`Mensaje recibido del cliente ${client.id}: ${data}`);
    this.server.emit('message-from-server', { clientId: client.id, message: data });
  }
}
