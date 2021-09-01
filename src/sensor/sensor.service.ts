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

  async create(sensorDto: SensorDto): Promise<SensorDocument> {
    const createDoc = new this.sensorModel(sensorDto);
    return createDoc.save();
  }

  async findAll(): Promise<SensorDocument[]> {
    return this.sensorModel.find().exec();
  }

  async findById(id: string): Promise<SensorDocument> {
    return this.sensorModel.findById(id).exec();
  }

  async updateById(id: string, inputDoc: object): Promise<SensorDocument> {
    return this.sensorModel.findByIdAndUpdate(id, { $set: { ...inputDoc } }, { new: true }).exec();
  }

  async deleteById(id: string): Promise<SensorDocument> {
    return this.sensorModel.findByIdAndDelete(id).exec();
  }
}
