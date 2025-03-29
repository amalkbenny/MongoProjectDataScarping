import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScrapedDataDocument = ScrapedData & Document;

@Schema()
export class ScrapedData {
  @Prop({ required: true })
  job: string;

  @Prop({ required: true })
  country: string;

  @Prop()
  origin: string;

  @Prop()
  phoneNumer: string;

  @Prop()
  email: string;

  @Prop()
  websiteLink: string;

  @Prop()
  companyName: string;

  @Prop()
  companyDescription: string;
  
  @Prop({ type: [String] })
  searchTerm: string[];

  @Prop({ default: Date.now })
  scrapedAt: Date;
}

export const ScrapedDataSchema = SchemaFactory.createForClass(ScrapedData); 