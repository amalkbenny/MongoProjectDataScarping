import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScrapedDataService } from './scraped-data.service';
import { ScrapedDataController } from './scraped-data.controller';
import { ScrapedData, ScrapedDataSchema } from './schemas/scraped-data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ScrapedData.name, schema: ScrapedDataSchema }
    ])
  ],
  controllers: [ScrapedDataController],
  providers: [ScrapedDataService],
})
export class ScrapedDataModule {} 