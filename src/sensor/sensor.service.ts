import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SensorDto } from './sensor.dto';
import { Sensor, SensorDocument } from './sensor.schema';

@Injectable()
export class SensorService {
  constructor(
    @InjectModel(Sensor.name) private sensorModel: Model<SensorDocument>,
  ) {}

  async post(sensorDto: SensorDto): Promise<SensorDocument> {
    const postDoc = new this.sensorModel(sensorDto);
    return postDoc.save();
  }

  async getAll(): Promise<SensorDocument[]> {
    return this.sensorModel.find().exec();
  }
}
