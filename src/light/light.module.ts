import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LightController } from './light.controller';
import { Light, LightSchema } from './light.schema';
import { LightService } from './light.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Light.name, schema: LightSchema }]),
  ],
  controllers: [LightController],
  providers: [LightService],
})
export class LightModule {}
