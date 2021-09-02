import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { CameraDto } from './camera.dto';
import { CameraDocument } from './camera.schema';
import { CameraService } from './camera.service';

@Controller('camera')
export class CameraController {
  constructor(private cameraService: CameraService) {}

  @Post()
  async create(@Body() cameraDto: CameraDto): Promise<CameraDocument> {
    return this.cameraService.create(cameraDto);
  }

  @Get()
  async findAll(): Promise<CameraDocument[]> {
    return this.cameraService.findAll();
  }

  @Get()
  async findById(@Query('id') id: string): Promise<CameraDocument> {
    return this.cameraService.findById(id);
  }

  @Get()
  async findByGroups(@Query('groups') groups: string): Promise<CameraDocument[]> {
    const arrGroups = groups.split(',');
    return this.cameraService.findByGroups(arrGroups);
  }

  @Get()
  async findBySerial(@Query('serial') serial: string): Promise<CameraDocument> {
    return this.cameraService.findBySerial(serial);
  }

  @Put()
  async updateById(@Query('id') id: string, @Body() inputDoc: object): Promise<CameraDocument> {
    return this.cameraService.updateById(id, inputDoc);
  }

  @Delete()
  async deleteById(@Query('id') id: string): Promise<CameraDocument> {
    return this.cameraService.deleteById(id);
  }
}
