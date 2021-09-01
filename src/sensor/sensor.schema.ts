import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Sensor {
  @Prop({ required: true })
  name: string;
  @Prop([String])
  groups: string[];
  @Prop()
  status: string;
}

export type SensorDocument = Sensor & Document;
export const SensorSchema = SchemaFactory.createForClass(Sensor);
