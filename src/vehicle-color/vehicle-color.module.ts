import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleColorController } from './vehicle-color.controller';
import { VehicleColor, VehicleColorSchema } from './vehicle-color.schema';
import { VehicleColorService } from './vehicle-color.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VehicleColor.name, schema: VehicleColorSchema },
    ]),
  ],
  controllers: [VehicleColorController],
  providers: [VehicleColorService],
  exports: [VehicleColorService],
})
export class VehicleColorModule {}
