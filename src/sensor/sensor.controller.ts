import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SensorDto } from './sensor.dto';
import { SensorDocument } from './sensor.schema';
import { SensorService } from './sensor.service';

@Controller('sensor')
export class SensorController {
  constructor(private sensorService: SensorService) {}

  @Post()
  async create(@Body() sensorDto: SensorDto): Promise<SensorDocument> {
    return this.sensorService.create(sensorDto);
  }

  @Get('all')
  async findAll(): Promise<SensorDocument[]> {
    return this.sensorService.findAll();
  }

  @Get('by-id')
  async findByid(@Query('id') id: string): Promise<SensorDocument> {
    return this.sensorService.findById(id);
  }

  @Put('by-id')
  async updateById(
    @Query('id') id: string,
    @Body() inputDoc: object,
  ): Promise<SensorDocument> {
    return this.sensorService.updateById(id, inputDoc);
  }

  @Delete('by-id')
  async deleteById(@Query('id') id: string): Promise<SensorDocument> {
    return this.sensorService.deleteById(id);
  }
}
