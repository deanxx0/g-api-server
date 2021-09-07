import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class VehicleModel {
  @Prop()
  model: string;
}

export type VehicleModelDocument = VehicleModel & Document;
export const VehicleModelSchema = SchemaFactory.createForClass(VehicleModel);
