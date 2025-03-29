import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScrapedData, ScrapedDataDocument } from './schemas/scraped-data.schema';
import { CreateScrapedDataDto } from './dto/create-scraped-data.dto';

@Injectable()
export class ScrapedDataService {
  constructor(
    @InjectModel(ScrapedData.name)
    private scrapedDataModel: Model<ScrapedDataDocument>,
  ) {}

  async create(createScrapedDataDto: CreateScrapedDataDto): Promise<ScrapedData> {
    const createdData = new this.scrapedDataModel(createScrapedDataDto);
    return createdData.save();
  }

  async findAll(): Promise<ScrapedData[]> {
    return this.scrapedDataModel.find().exec();
  }

  async findOne(id: string): Promise<ScrapedData> {
    return this.scrapedDataModel.findById(id).exec();
  }

  async update(
    id: string,
    updateScrapedDataDto: CreateScrapedDataDto,
  ): Promise<ScrapedData> {
    return this.scrapedDataModel
      .findByIdAndUpdate(id, updateScrapedDataDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<ScrapedData> {
    return this.scrapedDataModel.findByIdAndDelete(id).exec();
  }

  async findByTags(tags: string[]): Promise<ScrapedData[]> {
    return this.scrapedDataModel
      .find({ tags: { $in: tags } })
      .exec();
  }
} 