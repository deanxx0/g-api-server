import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CameraDto } from './camera.dto';
import { Camera, CameraDocument } from './camera.schema';

@Injectable()
export class CameraService {
  constructor(
    @InjectModel(Camera.name) private cameraModel: Model<CameraDocument>,
  ) {}

  async create(cameraDto: CameraDto): Promise<CameraDocument> {
    const createdDoc = new this.cameraModel(cameraDto);
    return createdDoc.save();
  }

  async findAll(): Promise<CameraDocument[]> {
    return this.cameraModel.find().exec();
  }

  async findById(id: string): Promise<CameraDocument> {
    return this.cameraModel.findById(id).exec();
  }

  async findByGroups(groups: string[]): Promise<CameraDocument[]> {
    return this.cameraModel.find({ groups: { $all: groups } }).exec();
  }

  async findBySerial(serial: string): Promise<CameraDocument> {
    return this.cameraModel.findOne({ serial: serial }).exec();
  }

  async updateById(id: string, inputDoc: object):Promise<CameraDocument> {
    return this.cameraModel.findByIdAndUpdate(id, { $set: { ...inputDoc } }, { new: true }).exec();
  }

  async deleteById(id: string): Promise<CameraDocument> {
    return this.cameraModel.findByIdAndDelete(id).exec();
  }
}
