import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class VehicleColor {
  @Prop()
  color: string;
}

export type VehicleColorDocument = VehicleColor & Document;
export const VehicleColorSchema = SchemaFactory.createForClass(VehicleColor);
