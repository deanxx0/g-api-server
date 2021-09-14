import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { VehicleColorService } from 'src/vehicle-color/vehicle-color.service';
import { VehicleModelService } from 'src/vehicle-model/vehicle-model.service';
import { VehicleDto } from './vehicle.dto';
import { VehicleDocument } from './vehicle.schema';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(
    private vehicleService: VehicleService,
    private vehicleModelService: VehicleModelService,
    private vehicleColorService: VehicleColorService,
  ) {}

  @Post()
  async create(@Body() vehicleDto: VehicleDto): Promise<VehicleDocument> {
    await this.vehicleModelService.createWithModel(vehicleDto.properties.model);
    await this.vehicleColorService.createWithColor(vehicleDto.properties.color);
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
  async findByVincode(
    @Query('vincode') vincode: string,
  ): Promise<VehicleDocument> {
    return this.vehicleService.findByVincode(vincode);
  }

  @Get('model-color-list')
  async getModelColorList(): Promise<object> {
    const models = await this.vehicleModelService.getModelList();
    const colors = await this.vehicleColorService.getColorList();
    return this.vehicleService.getModelColorList(models, colors);
  }

  @Put('by-id')
  async updateById(
    @Query('id') id: string,
    @Body() inputDoc: object,
  ): Promise<VehicleDocument> {
    return this.vehicleService.updateById(id, inputDoc);
  }

  @Delete('by-id')
  async deleteById(@Query('id') id: string): Promise<VehicleDocument> {
    return this.vehicleService.deleteById(id);
  }
}
