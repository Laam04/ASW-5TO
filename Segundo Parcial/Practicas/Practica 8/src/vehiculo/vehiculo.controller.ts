import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehiculosService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Controller('vehiculos')
export class VehiculosController {
  constructor(private readonly vehiculosService: VehiculosService) {}

  @Post()
  create(@Body() createVehiculoDto: CreateVehiculoDto) {
    return this.vehiculosService.create(createVehiculoDto);
  }

  @Get()
  findAll() {
    return this.vehiculosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.vehiculosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateVehiculoDto: UpdateVehiculoDto) {
    return this.vehiculosService.update(+id, updateVehiculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.vehiculosService.remove(+id);
  }
}
