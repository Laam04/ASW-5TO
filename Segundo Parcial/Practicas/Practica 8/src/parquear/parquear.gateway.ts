import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ParquearService } from './parquear.service';
import { CreateParquearDto } from './dto/create-parquear.dto';

@WebSocketGateway({ cors: true })
export class ParquearGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly parquearService: ParquearService) {}

  @SubscribeMessage('parquear-create')
  async createParquear(@MessageBody() createParquearDto: CreateParquearDto, @ConnectedSocket() client: Socket) {

    const parqueo = await this.parquearService.create(createParquearDto);

    this.server.emit('parquear-created', parqueo);
  }

  @SubscribeMessage('parquear-get-all')
  async getAllParqueos(@ConnectedSocket() client: Socket) {
    const parqueos = await this.parquearService.findAll();
    client.emit('parqueos-list', parqueos);
  }

  @SubscribeMessage('consultar-activos')
  async handleConsultarActivos(@ConnectedSocket() client: Socket) {

    const transaccionesActivas = await this.parquearService.getTransaccionesActivas();

    this.server.emit('message-from-server', {
      message: 'Listado de transacciones activas',
      transaccionesActivas,
    });
    client.emit('message-from-client', {
      event: 'consultar-activos',
      data: transaccionesActivas,
    });
  }
}
