import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleModelController } from './vehicle-model.controller';
import { VehicleModel, VehicleModelSchema } from './vehicle-model.schema';
import { VehicleModelService } from './vehicle-model.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VehicleModel.name, schema: VehicleModelSchema },
    ]),
  ],
  controllers: [VehicleModelController],
  providers: [VehicleModelService],
  exports:[VehicleModelService],
})
export class VehicleModelModule {}
