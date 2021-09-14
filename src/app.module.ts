import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SensorModule } from './sensor/sensor.module';
import { LightModule } from './light/light.module';
import { CameraModule } from './camera/camera.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { VehicleModelModule } from './vehicle-model/vehicle-model.module';
import { VehicleColorModule } from './vehicle-color/vehicle-color.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?authSource=admin`,
    ),
    SensorModule,
    LightModule,
    CameraModule,
    VehicleModule,
    VehicleModelModule,
    VehicleColorModule,
  ],
})
export class AppModule {}
