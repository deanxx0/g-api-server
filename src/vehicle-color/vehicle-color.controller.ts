import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { VehicleColorDto } from './vehicle-color.dto';
import { VehicleColorDocument } from './vehicle-color.schema';
import { VehicleColorService } from './vehicle-color.service';

@Controller('vehicle-color')
export class VehicleColorController {
  constructor(private vehicleColorService: VehicleColorService) {}

  @Post()
  async create(@Body() vehicleColorDto: VehicleColorDto) {
    this.vehicleColorService.create(vehicleColorDto);
  }

  @Get('all')
  async findAll(): Promise<VehicleColorDocument[]> {
    return this.vehicleColorService.findAll();
  }

  @Get('by-id')
  async findById(@Query('id') id: string): Promise<VehicleColorDocument> {
    return this.vehicleColorService.findById(id);
  }

  @Get('by-model')
  async findByModel(
    @Query('model') model: string,
  ): Promise<VehicleColorDocument> {
    return this.vehicleColorService.findByModel(model);
  }

  @Put('by-id')
  async updateById(
    @Query('id') id: string,
    @Body() inputDoc: object,
  ): Promise<VehicleColorDocument> {
    return this.vehicleColorService.updateById(id, inputDoc);
  }

  @Delete('by-id')
  async deleteById(@Query('id') id: string): Promise<VehicleColorDocument> {
    return this.vehicleColorService.deleteById(id);
  }
}
