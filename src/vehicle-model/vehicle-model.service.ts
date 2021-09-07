import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VehicleModelDto } from './vehicle-model.dto';
import { VehicleModel, VehicleModelDocument } from './vehicle-model.schema';

@Injectable()
export class VehicleModelService {
  constructor(
    @InjectModel(VehicleModel.name)
    private vehicleModelModel: Model<VehicleModelDocument>,
  ) {}

  async create(
    vehicleModelDto: VehicleModelDto,
  ): Promise<VehicleModelDocument> {
    const createdDoc = new this.vehicleModelModel(vehicleModelDto);
    return createdDoc.save();
  }

  async createWithModel(model: string): Promise<VehicleModelDocument> {
    const createdDoc = new this.vehicleModelModel({
      model: model
    });
    return createdDoc.save();
  }

  async findAll(): Promise<VehicleModelDocument[]> {
    return this.vehicleModelModel.find().exec();
  }

  async findById(id: string): Promise<VehicleModelDocument> {
    return this.vehicleModelModel.findById(id).exec();
  }

  async findByModel(model: string): Promise<VehicleModelDocument> {
    return this.vehicleModelModel.findOne({ model: model }).exec();
  }

  async updateById(
    id: string,
    inputDoc: object,
  ): Promise<VehicleModelDocument> {
    return this.vehicleModelModel
      .findByIdAndUpdate(id, { $set: { ...inputDoc } }, { new: true })
      .exec();
  }

  async deleteById(id: string): Promise<VehicleModelDocument> {
    return this.vehicleModelModel.findByIdAndDelete(id).exec();
  }
}
