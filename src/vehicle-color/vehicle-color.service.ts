import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VehicleColorDto } from './vehicle-color.dto';
import { VehicleColor, VehicleColorDocument } from './vehicle-color.schema';

@Injectable()
export class VehicleColorService {
  constructor(
    @InjectModel(VehicleColor.name)
    private vehicleColorModel: Model<VehicleColorDocument>,
  ) {}

  async create(vehicleColorDto: VehicleColorDto) {
    const createdDoc = new this.vehicleColorModel(vehicleColorDto);
    await createdDoc.save().catch(error => console.log(`create vehicle color error: ${error}`));
  }

  async createWithColor(color: string) {
    const createdDoc = new this.vehicleColorModel({
      color: color
    });
    await createdDoc.save().catch(error => console.log(`create vehicle color error: ${error}`));
  }

  async findAll(): Promise<VehicleColorDocument[]> {
    return this.vehicleColorModel.find().exec();
  }

  async findById(id: string): Promise<VehicleColorDocument> {
    return this.vehicleColorModel.findById(id).exec();
  }

  async findByModel(model: string): Promise<VehicleColorDocument> {
    return this.vehicleColorModel.findOne({ model: model }).exec();
  }

  async updateById(id: string, inputDoc: object): Promise<VehicleColorDocument> {
    return this.vehicleColorModel.findByIdAndUpdate(id, {$set: { ...inputDoc }}, { new: true}).exec();
  }

  async deleteById(id: string): Promise<VehicleColorDocument> {
    return this.vehicleColorModel.findByIdAndDelete(id).exec();
  }
}
