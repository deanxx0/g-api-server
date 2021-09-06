import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VehicleDto } from './vehicle.dto';
import { Vehicle, VehicleDocument } from './vehicle.schema';

@Injectable()
export class VehicleService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>,
  ) {}

  async create(vehicleDto: VehicleDto): Promise<VehicleDocument> {
    const createdDoc = new this.vehicleModel(vehicleDto);
    return createdDoc.save();
  }

  async findAll(): Promise<VehicleDocument[]> {
    return this.vehicleModel.find().exec();
  }

  async findById(id: string): Promise<VehicleDocument> {
    return this.vehicleModel.findById(id).exec();
  }

  async findByVincode(vincode: string): Promise<VehicleDocument> {
    const latestDoc = await this.vehicleModel
      .find({ vinCode: vincode })
      .sort({ _id: -1 })
      .limit(1)
      .exec();
    return latestDoc[latestDoc.length - 1];
  }

  async updateById(id: string, inputDoc: object): Promise<VehicleDocument> {
    return this.vehicleModel
      .findByIdAndUpdate(id, { $set: { ...inputDoc } }, { new: true })
      .exec();
  }

  async deleteById(id: string): Promise<VehicleDocument> {
    return this.vehicleModel.findByIdAndDelete(id).exec();
  }
}
