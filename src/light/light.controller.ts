import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { LightDto } from './light.dto';
import { LightDocument } from './light.schema';
import { LightService } from './light.service';

@Controller('light')
export class LightController {
  constructor(private lightService: LightService) {}

  @Post()
  async create(@Body() lightDto: LightDto): Promise<LightDocument> {
    return this.lightService.create(lightDto);
  }

  @Get()
  async findAll(): Promise<LightDocument[]> {
    return this.lightService.findAll();
  }

  @Get()
  async findById(@Query('id') id: string): Promise<LightDocument> {
    return this.lightService.findById(id);
  }

  @Put()
  async updateById(@Query('id') id: string, @Body() inputDoc: object): Promise<LightDocument> {
    return this.lightService.updateById(id, inputDoc);
  }

  @Delete()
  async deleteById(@Query('id') id: string): Promise<LightDocument> {
    return this.lightService.deleteById(id);
  }
}
