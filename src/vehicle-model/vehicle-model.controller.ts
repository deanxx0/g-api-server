import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { VehicleModelDto } from './vehicle-model.dto';
import { VehicleModelDocument } from './vehicle-model.schema';
import { VehicleModelService } from './vehicle-model.service';

@Controller('vehicle-model')
export class VehicleModelController {
  constructor(private vehicleModelService: VehicleModelService) {}

  @Post()
  async create(@Body() vehicleModelDto: VehicleModelDto) {
    this.vehicleModelService.create(vehicleModelDto);
  }

  @Get('all')
  async findAll(): Promise<VehicleModelDocument[]> {
    return this.vehicleModelService.findAll();
  }

  @Get('by-id')
  async findById(@Query('id') id: string): Promise<VehicleModelDocument> {
    return this.vehicleModelService.findById(id);
  }

  @Get('by-model')
  async findByModel(
    @Query('model') model: string,
  ): Promise<VehicleModelDocument> {
    return this.vehicleModelService.findByModel(model);
  }

  @Put('by-id')
  async updateById(
    @Query('id') id: string,
    @Body() inputDoc: object,
  ): Promise<VehicleModelDocument> {
    return this.vehicleModelService.updateById(id, inputDoc);
  }

  @Delete('by-id')
  async deleteById(@Query('id') id: string): Promise<VehicleModelDocument> {
    return this.vehicleModelService.deleteById(id);
  }
}
