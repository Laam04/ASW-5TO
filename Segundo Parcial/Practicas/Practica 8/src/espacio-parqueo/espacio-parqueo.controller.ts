import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { EspacioParqueoService } from './espacio-parqueo.service';
import { CreateEspacioParqueoDto } from './dto/create-espacio-parqueo.dto';
import { UpdateEspacioParqueoDto } from './dto/update-espacio-parqueo.dto';

@Controller('espacio-parqueo')
export class EspacioParqueoController {
  constructor(private readonly espacioParqueoService: EspacioParqueoService) {}

  @Post()
  async create(@Body() createEspacioParqueoDto: CreateEspacioParqueoDto) {
    return this.espacioParqueoService.create(createEspacioParqueoDto);
  }

  @Get()
  findAll() {
    return this.espacioParqueoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.espacioParqueoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEspacioParqueoDto: UpdateEspacioParqueoDto) {
    return this.espacioParqueoService.update(id, updateEspacioParqueoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.espacioParqueoService.remove(id);
  }
}
