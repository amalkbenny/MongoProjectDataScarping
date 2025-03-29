import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MasterChecksDocument = MasterChecks & Document;

@Schema()
export class MasterChecks {
  @Prop({ required: true })
  job: string;

  @Prop({ required: true })
  country: string;

  @Prop()
  origin: string;

  @Prop({ type: [String] })
  searchTerm: string[];

  @Prop({ default: Date.now })
  scrapedAt: Date;
}

export const MasterChecksSchema = SchemaFactory.createForClass(MasterChecks); 