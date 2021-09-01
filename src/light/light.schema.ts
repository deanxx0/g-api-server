import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Light {
  @Prop()
  name: string;
  @Prop()
  groups: string[];
  @Prop()
  status: string;
  @Prop()
  workingFolderPath: string;
  @Prop()
  serverIp: string;
}

export type LightDocument = Light & Document;
export const LightSchema = SchemaFactory.createForClass(Light);
