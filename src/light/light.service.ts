import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LightDto } from './light.dto';
import { Light, LightDocument } from './light.schema';

@Injectable()
export class LightService {
  constructor(
    @InjectModel(Light.name) private lightModel: Model<LightDocument>,
  ) {}

  async create(lightDto: LightDto): Promise<LightDocument> {
    const createDoc = new this.lightModel(lightDto);
    return createDoc.save();
  }

  async findAll(): Promise<LightDocument[]> {
    return this.lightModel.find().exec();
  }

  async findById(id: string): Promise<LightDocument> {
    return this.lightModel.findById(id).exec();
  }

  async updateById(id: string, inputDoc: object): Promise<LightDocument> {
    return this.lightModel
      .findByIdAndUpdate(id, { $set: { ...inputDoc } }, { new: true })
      .exec();
  }

  async deleteById(id: string): Promise<LightDocument> {
    return this.lightModel.findByIdAndDelete(id).exec();
  }
}
