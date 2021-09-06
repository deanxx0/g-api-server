import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { VehicleDto } from './vehicle.dto';
import { VehicleDocument } from './vehicle.schema';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Post()
  async create(@Body() vehicleDto: VehicleDto): Promise<VehicleDocument> {
    return this.vehicleService.create(vehicleDto);
  }

  @Get('all')
  async findAll(): Promise<VehicleDocument[]> {
    return this.vehicleService.findAll();
  }

  @Get('by-id')
  async findById(@Query('id') id: string): Promise<VehicleDocument> {
    return this.vehicleService.findById(id);
  }

  @Get('by-vincode')
  async findByVincode(@Query('vincode') vincode: string): Promise<VehicleDocument> {
    return this.vehicleService.findByVincode(vincode);
  }

  @Put('by-id')
  async updateById(@Query('id') id: string, @Body() inputDoc: object): Promise<VehicleDocument> {
    return this.vehicleService.updateById(id, inputDoc);
  }

  @Delete('by-id')
  async deleteById(@Query('id') id: string): Promise<VehicleDocument> {
    return this.vehicleService.deleteById(id);
  }
}
