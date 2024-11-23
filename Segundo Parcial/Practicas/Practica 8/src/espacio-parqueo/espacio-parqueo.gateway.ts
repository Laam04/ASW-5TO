import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { EspacioParqueoService } from './espacio-parqueo.service';
import { CreateEspacioParqueoDto } from './dto/create-espacio-parqueo.dto';

@WebSocketGateway({ cors: true })
export class EspacioParqueoGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly espacioParqueoService: EspacioParqueoService) {}

  @SubscribeMessage('create-espacio-parqueo')
  async create(@MessageBody() createEspacioParqueoDto: CreateEspacioParqueoDto) {
    const espacio = await this.espacioParqueoService.create(createEspacioParqueoDto);
    this.server.emit('espacio-parqueo-created', espacio);
    return espacio;
  }

  @SubscribeMessage('find-all-espacios-parqueo')
  async findAll() {
    return this.espacioParqueoService.findAll();
  }
}
