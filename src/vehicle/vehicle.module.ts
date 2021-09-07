import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleModelModule } from 'src/vehicle-model/vehicle-model.module';
import { VehicleController } from './vehicle.controller';
import { Vehicle, VehicleSchema } from './vehicle.schema';
import { VehicleService } from './vehicle.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
    VehicleModelModule
  ],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}
