import { Body, Controller, Get, Post } from '@nestjs/common';
import { SensorDto } from './sensor.dto';
import { SensorDocument } from './sensor.schema';
import { SensorService } from './sensor.service';

@Controller('sensor')
export class SensorController {
  constructor(private sensorService: SensorService) {}

  @Post()
  async post(@Body() sensorDto: SensorDto): Promise<SensorDocument> {
    return this.sensorService.post(sensorDto);
  }

  @Get()
  async getAll(): Promise<SensorDocument[]> {
    return this.sensorService.getAll();
  }
}
