import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ParquearService } from './parquear.service';
import { CreateParquearDto } from './dto/create-parquear.dto';
import { UpdateParquearDto } from './dto/update-parquear.dto';

@Controller('parquear')
export class ParquearController {
  constructor(private readonly parquearService: ParquearService) {}

  @Post()
  async create(@Body() createParquearDto: CreateParquearDto) {
    return this.parquearService.create(createParquearDto);
  }

  @Get()
  findAll() {
    return this.parquearService.findAll();
  }



}
