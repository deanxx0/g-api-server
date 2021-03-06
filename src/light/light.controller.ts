import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
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

  @Get('all')
  async findAll(): Promise<LightDocument[]> {
    return this.lightService.findAll();
  }

  @Get('by-id')
  async findById(@Query('id') id: string): Promise<LightDocument> {
    return this.lightService.findById(id);
  }

  @Put('by-id')
  async updateById(
    @Query('id') id: string,
    @Body() inputDoc: object,
  ): Promise<LightDocument> {
    return this.lightService.updateById(id, inputDoc);
  }

  @Delete('by-id')
  async deleteById(@Query('id') id: string): Promise<LightDocument> {
    return this.lightService.deleteById(id);
  }
}
