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

  async create(vehicleModelDto: VehicleModelDto) {
    const createdDoc = new this.vehicleModelModel(vehicleModelDto);
    await createdDoc
      .save()
      .catch((error) => console.log(`create vehicle model error: ${error}`));
  }

  async createWithModel(model: string) {
    const createdDoc = new this.vehicleModelModel({
      model: model,
    });
    await createdDoc
      .save()
      .catch((error) => console.log(`create vehicle model error: ${error}`));
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

  async getModelList(): Promise<string[]> {
    const modelDocs = await this.vehicleModelModel.find({}, {model: 1}).exec();
    const models: string[] = modelDocs.map((modelDoc) => modelDoc.model);
    models.unshift('all');
    return models;
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
